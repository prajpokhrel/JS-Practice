function character_counter(my_string) {
    let output_string = "", count = 1, current_character = my_string[0];
    for (let i = 1; i < my_string.length; i++) {
        if (current_character === my_string[i]) {
            count = count + 1;
        } else {
            output_string += `${count}${current_character}`;
            count = 1
            current_character = my_string[i];
        }
    }
    output_string += `${count}${current_character}`;
    return output_string;
}

console.log(character_counter("ABBCCCDDDDCCCBBA"));
console.log(character_counter("AAABBBCCCDDD"));
console.log(character_counter("ABCAABBCCAAABBBCCC"));
