// const user: (string | number)[] = ["ac", 2];

let user: [string, number, boolean];
user = ["ac", 3, true] //we cant change the order of the initialized tuples


type user = [number, string];

const newUser: user = [123, 'abcd'];

//in tuples you can use array method which it should be allowed like e.g >>
newUser[1] = "hscVerma"
newUser.push(12);