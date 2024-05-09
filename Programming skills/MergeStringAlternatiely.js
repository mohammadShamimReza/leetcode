


var mergeAlternately = function (word1, word2) { 
    let result = '';
    for (let index = 0; index < word1.length || index < word2.length; index++) {
        if (index < word1.length) result += word1[index];
                if (index < word2.length) result += word2[index];


    }
    return result;
};




console.log(mergeAlternately('sai', 'hmm reza'))