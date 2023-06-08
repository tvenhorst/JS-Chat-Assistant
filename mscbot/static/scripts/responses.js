function getBotResponse(input) {
    // Help responses
    if (input == "help") {
        return "What do you need help with?";
    } else if (input == "i need help") {
        return "What do you need help with?";
    } else if (input == "can you help me") {
        return "What do you need help with?";
    }

    // Greetings responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "hi") {
        return "Hello there!";
    } else if (input == "hey") {
        return "Hello there!";
    } 

    // Leaving responses
    if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "bye") {
        return "Talk to you later!";
    } else if (input == "cya") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}