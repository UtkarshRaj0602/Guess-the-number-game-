function game(){
    let Lifes_Left_count = 8;
    let random_number =  Math.floor((Math.random()*20)+1);
    let High_Score_count = 0; 

    document.querySelector('.user_input_check_btn').addEventListener('click', () => {
        const User_Inputed_Number = Number(document.querySelector('.User_Inputed_Number').value);

        // Checking For User Input and Our Random Number
       if(Lifes_Left_count >= 1){
            if(User_Inputed_Number == random_number){
                document.querySelector('.Message').innerHTML = `That's a Correct Answer`;
                document.querySelector('.Main_content').style.backgroundImage = 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)';
                if(Lifes_Left_count == 8){
                    document.querySelector('.High_Score_count').innerHTML = High_Score_count;
                    High_Score_count += 100;
                }
                else if(Lifes_Left_count > 6 && Lifes_Left_count < 8){
                    document.querySelector('.High_Score_count').innerHTML = High_Score_count;
                    High_Score_count += 80;
                }
                else if(Lifes_Left_count > 4 && Lifes_Left_count <= 6){
                    document.querySelector('.High_Score_count').innerHTML = High_Score_count;
                    High_Score_count += 60;
                }
                else if(Lifes_Left_count > 2 && Lifes_Left_count <= 4){
                    document.querySelector('.High_Score_count').innerHTML = High_Score_count;
                    High_Score_count += 40;
                }
                else if(Lifes_Left_count > 1 && Lifes_Left_count <= 2){
                    document.querySelector('.High_Score_count').innerHTML = High_Score_count;
                    High_Score_count += 20;
                }
                else{
                    document.querySelector('.High_Score_count').innerHTML = High_Score_count;
                    High_Score_count += 0;
                }
            }
            else if(User_Inputed_Number != random_number){
                document.querySelector('.Message').innerHTML = User_Inputed_Number > random_number ? `Too High` :  `Too Low`;
                Lifes_Left_count--;
                document.querySelector('.Lifes_Left_count').innerHTML = Lifes_Left_count;
                High_Score_count -=10;
                document.querySelector('.High_Score_count').innerHTML = High_Score_count;
            }
        }
        else{
            document.querySelector('.Message').innerHTML = `Wasted !! You Lost !! Try Again`;
        }

        // Displaying Message to the User
        if(User_Inputed_Number){
            document.querySelector('.user_number_input_display').innerHTML = User_Inputed_Number;
        }
        else{
            document.querySelector('.Message').innerHTML = 'Please Enter a Number';
            if(!User_Inputed_Number){
                document.querySelector('.user_number_input_display').innerHTML = '?';
            }
        }
    });

    // Game Reload
    document.querySelector('.reload').addEventListener('click', () => {
        Lifes_Left_count = 8;
        random_number =  Math.floor((Math.random()*20)+1);
        document.querySelector('.Message').innerHTML = 'Start Guessing....';
        document.querySelector('.Lifes_Left_count').innerHTML = Lifes_Left_count;
        document.querySelector('.High_Score_count').innerHTML = High_Score_count;
        document.querySelector('.User_Inputed_Number').value = ' ';
        document.querySelector('.user_number_input_display').innerHTML = '?';
        document.querySelector('.Main_content').style.backgroundImage = 'linear-gradient(to right, #ece9e6, #ffffff)';
    });
}
game();