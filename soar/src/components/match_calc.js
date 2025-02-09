
import {auth, getMyQuizResults } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';

const my_response = [true, "mentee", "UF", "12345", true, true, true, true, true];

const other_responses = [
    [true, "mentee", "UF", "4568", true, true, true, true, false],
    [false, "mentor", "idk", "943849", true, true, false, true, true],
    [true, "mentee", "UF", "3294942", true, false, true, false, true],
    [false, "mentor", "UF", "119239", true, true, false, false, false],
    [true, "mentee", "idk", "2182139", true, true, false, false, false]
];

const MatchCalc = (the_user, potential_matches) => {
    var all_percentages = [];
    var indiv_percentage = [];

    const [user] = useAuthState(auth);

    const myResponse = getMyQuizResults(user.uid).then((myResponse) =>{
        //continue code here
    });
    
    for (var i=0; i<potential_matches.length; i++) {

        if (potential_matches[i][1] == the_user[1]) {
            continue;
        };

        if ((potential_matches[i][0] == true || the_user[0] == true) && potential_matches[i][2] != the_user[2]) {
            continue;
        };

        var score = 0;
        indiv_percentage.push(potential_matches[i][3]);
        for (var j=4; j<potential_matches[i].length; j++) {
            if (the_user[j] == potential_matches[i][j]) {
                score++;
            };
        };
        var percentage = score*100/(potential_matches[i].length-4);
        indiv_percentage.push(percentage);
        all_percentages.push(indiv_percentage);
        indiv_percentage = [];
    }

    var best_match = "";
    var greatest_percentage = 0;
    for (k=0; k<all_percentages.length; k++) {
      if (all_percentages[k][1] > greatest_percentage) {
        greatest_percentage = all_percentages[k][1];
        best_match = all_percentages[k][0];
      }
    }
    return[best_match, greatest_percentage];
  
}


console.log(MatchCalc(my_response, other_responses, false));