
   
    
     
    
     
     // Array of trivia data
    
    var TriviaData = new Array(10)
    
     createTwoDimensionalArray(3);
    
     
    
            // Variables to track state of the game
    
            // i.e. number questions asked, current correct total and current question
    
            var questionsAsked = 0;
    
            var totalCorrect = 0;
    
            var currentQuestion = 0;
    
            var selectionValid = false;
    
     
    
            // Questions
    
            TriviaData[0][0] = "Player casts “Assassinate” on “Acolyte of pain”. Acolyte’s owner will draw cards?";
    
            TriviaData[1][0] = "Player attacks with Jaraxxus hero, then plays “Lord Jaraxxus”. He will be able to attack this turn again?";
    
            TriviaData[2][0] = "Crazed Alchemist’s” battlecry can destroy minion with 0 attack.";
    
            TriviaData[3][0] = "Paladin has “Sword of Justice” equipped and “Noble sacrifice” up. When secret triggers, Defender will be 2/1?";
    
            TriviaData[4][0] = "Shaman plays “Far Sight” and gets a card with reduced manacost. Priest steals this card with “Mind vision”. Stolen card will havereduced mana cost reduced?";
    
            TriviaData[5][0] = "Player has “Stormwind Champion” 6/1 and “Wisp” 2/2 on board. Opponent Mage plays “Arcane explosion”. Will the wisp die?";
    
            TriviaData[6][0] = "Mage has “Counterspell” secret up. Hunter plays “Flare”. Will conunterspell be activated?";
    
            TriviaData[7][0] = "Priest has “Kobold Geomancer”, “Malygos” and “Prophet Velen” on board. Priest plays “Mind blast”. Mind blast deals 16 dmg?";
    
            TriviaData[8][0] = "Opponent has single minion with Taunt and Stealth on it. You will be able to attack opponent’s hero?";
    
            TriviaData[9][0] = "“Deadly shot” can destroy Fairy dragon.";
    
       
    
            // Answers
    
            TriviaData[0][1] = "false";
    
            TriviaData[1][1] = "false";
    
            TriviaData[2][1] = "true";
    
            TriviaData[3][1] = "false";
    
            TriviaData[4][1] = "false";
    
            TriviaData[5][1] = "false";
    
            TriviaData[6][1] = "true";
    
            TriviaData[7][1] = "false";
    
            TriviaData[8][1] = "true";
    
            TriviaData[9][1] = "true";
    
     
    
            // Has question been asked
    
            // -- necessary because we are asking in random order
    
            TriviaData[0][2] = "no";
    
            TriviaData[1][2] = "no";
    
            TriviaData[2][2] = "no";
    
            TriviaData[3][2] = "no";
    
            TriviaData[4][2] = "no";
    
            TriviaData[5][2] = "no";
    
            TriviaData[6][2] = "no";
    
            TriviaData[7][2] = "no";
    
            TriviaData[8][2] = "no";
    
            TriviaData[9][2] = "no";
    
     
    
            // Load up first question
    
            setQuestion();
    
     
    
            // Sets question text and indicator so that we know the question has been displayed
    
            function setQuestion() {
    
                selectionValid = false; // Flag to make sure question has not been asked yet
    
                while (selectionValid == false) {
    
                    currentQuestion = Math.floor(Math.random() * 10); // randomly select starting question
    
                    if (TriviaData[currentQuestion][2] == "no") {
    
                        selectionValid = true;
    
                    }
    
                }
    
                document.getElementById("TriviaQuestion").innerHTML = TriviaData[currentQuestion][0];
    
                TriviaData[currentQuestion][2] = "yes";
    
                questionsAsked = questionsAsked + 1;
    
            }
    
     
    
            function processAnswer(myAnswer) {
    
                if (TriviaData[currentQuestion][1] == myAnswer) {
    
                    // answer correct
    
                    totalCorrect = totalCorrect + 1;
    
                }
    
            }
    
     
    
            // This function creates our two dimensional array
    
            function createTwoDimensionalArray(arraySize) {
    
                for (i = 0; i < TriviaData.length; ++i)
    
                    TriviaData[i] = new Array(arraySize);
    
            }
    
     
    
            // This function checks the answer, updates correct total
    
            // and randomly selects the next question
    
            function checkAnswer() {
    
                if (document.getElementById("RadioTrue").checked) {
    
                    processAnswer("true");
    
                }
    
                else {
    
                    processAnswer("false");
    
                }
    
                // get next question if not asked all yet
    
                if (questionsAsked < 10) {
    
                    setQuestion();
    
                }
    
                // final question asked - disable button and show final results
    
                else {
    
                    alert("Quiz complete! You got " + totalCorrect + " correct out of 10.");
    
                    document.getElementById("ButtonContinue").disabled = true;
    
                }
    
                // update totals
    
                document.getElementById("NumberAsked").innerHTML = questionsAsked;
    
                document.getElementById("NumberCorrect").innerHTML = totalCorrect;
    
            }
    
     
    
       