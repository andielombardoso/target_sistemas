function inverterString(string) {
    var novaString = "";
    for (var i = string.length - 1; i >= 0; i--) {
        novaString += string[i];
    }
    return novaString;
}

inverterString(prompt("Insira uma string:"));