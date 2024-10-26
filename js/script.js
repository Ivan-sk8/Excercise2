// Actividad de challenge 
let challenge = '30 Days Of JavaScript'
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.substr(3,5));
console.log(challenge.substr(3,20));
console.log(challenge.includes('Script'));
console.log(challenge.split(''));
console.log(challenge.replace('JavaScript', 'Node'));

// Excercise 2
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'));
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'));
console.log('You cannot end a sentence with because because because is a conjunction'.search('because'));
console.log(' 30 Days Of JavaScript '.trim());
console.log(' 30 Days Of JavaScript '.startsWith(''));
console.log(' 30 Days Of JavaScript '.endsWith(''));
console.log(challenge.match('a'));
console.log("30 dias de ".concat("JavaScript"));
console.log(challenge.repeat(2));

