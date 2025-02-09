const my_response = ["mentee", "UF", "12345", true, true, true, true, true];
const other_responses = [
    ["mentee", "UF", "4568", true, true, true, true, false],
    ["mentor", "idk", "943849", true, true, false, true, true],
    ["mentee", "UF", "3294942", true, false, true, false, true],
    ["mentor", "UF", "119239", true, true, false, false, false],
    ["mentee", "idk", "2182139", true, true, false, false, false]
];

const MatchCalc = (the_user, potential_matches, limit) => {
    var all_percentages = [];
    var indiv_percentage = [];
    
    for (var i=0; i<potential_matches.length; i++) {

        if (potential_matches[i][0] == the_user[0]) {
            continue;
        };

        if (limit == true && potential_matches[i][1] != the_user[1]) {
            continue;
        };

        var score = 0;
        indiv_percentage.push(potential_matches[i][2]);
        for (var j=3; j<potential_matches[i].length; j++) {
            if (the_user[j] == potential_matches[i][j]) {
                score++;
            };
        };
        var percentage = score*100/(potential_matches[i].length-3);
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