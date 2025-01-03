const generateConfirmationID = () => {
    const length = 10;
    let confirmationID = "";
    for (let i = 0; i < length; i++) {
        confirmationID += Math.floor(Math.random() * 10);
    }
    return confirmationID;
};

export default generateConfirmationID