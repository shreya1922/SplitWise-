const addTransactionToFirebase = async (payer, payee, amount) => {
    try {
      const docRef = await addDoc(collection(db, "transactions"), {
        payer: payer,
        payee: payee,
        amount: parseFloat(amount),
        timestamp: new Date(),
      });
  
      console.log("Transaction added with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding transaction: ", e);
    }
  };
  