const SayHello = async (userName) => {
    const promise = await fetch(`https://chinsallforone.azurewebsites.net/SayHello/AddName/${userName}`);
    const data = await promise.text();
    return data;
}

const AddNums = async (firstNumber, secondNumber) => {
    const promise = await fetch(`https://chinsallforone.azurewebsites.net/AddNumbers/AddNumbers/${firstNumber}/${secondNumber}`);
    const data = await promise.text();
    return data;
}

const GreaterOrLess = async (num1, num2) => {
    const promise = await fetch(`https://chinsallforone.azurewebsites.net/GreaterOrLess/GreaterOrLess/${num1}/${num2}`);
    const data = await promise.text();
    return data;
}

const MadLibs = async (userName, adj1, verb1, noun1, verb2, noun2, adj2, adj3, noun3, name2, adj4) => {
    const promise = await fetch(`https://chinsallforone.azurewebsites.net/MadLibs/MadLibs/${userName}/${adj1}/${verb1}/${noun1}/${verb2}/${noun2}/${adj2}/${adj3}/${noun3}/${name2}/${adj4}`);
    const data = await promise.text();
    console.log(data);
    return data;
}

const Magic8Ball = async (userQuestion) => {
    const promise = await fetch(`https://chinsallforone.azurewebsites.net/Magic8Ball/Magic8Ball/${userQuestion}`);
    const data = await promise.text();
    return data;
}

const NameAndTime = async (userName, wakeUpTime) => {
    const promise = await fetch(`https://chinsallforone.azurewebsites.net//NameAndTime/TwoQuestions/${userName}, ${wakeUpTime}`);
    const data = await promise.text();
    console.log(data);
    return data;
}

const OddOrEven = async (num1) => {
    const promise = await fetch(`https://chinsallforone.azurewebsites.net/OddOrEven/OddOrEven/${num1}`);
    const data = await promise.text();
    return data;
}

const RestPicker = async (input) => {
    const promise = await fetch(`https://chinsallforone.azurewebsites.net/RestPicker/WhichRestaurant/${input}`);
    const data = await promise.text();
    return data;
}

const ReverseAbc = async (userInput) => {
    const promise = await fetch(`https://chinsallforone.azurewebsites.net/ReverseItAlphaNum/ReverseItPt1/${userInput}`);
    const data = await promise.text();
    return data;
}

const Reverse123 = async (nums1) => {
    const promise = await fetch(`https://chinsallforone.azurewebsites.net/ReverseItNum/ReverseItPt2/${nums1}`);
    const data = await promise.text();
    return data;
}

export { SayHello, AddNums, GreaterOrLess, MadLibs, Magic8Ball, NameAndTime, OddOrEven, RestPicker, Reverse123, ReverseAbc }