const addParticipant = (name, amount) => {
    // Add the participant to the local state
    setParticipants([...participants, { name, amount }]);
  
    // Store the participant's expense in Firestore
    addExpenseToFirebase(name, amount);
  };
  