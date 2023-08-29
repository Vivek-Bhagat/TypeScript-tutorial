let score: number | string = 33 //multiple type can be assigned using the union

score = 22
score = "dsa"


type Username = {
    name: string
    id:number
}

type Admin = {
    userName: string
    id: number
}
let vivek: Username | Admin = { name: " vivek", id: 123 }
//passing the multiple things in the name using union
vivek = { userName: "hcc", id: 234 }


// --------------------------------------------

// function getDbId(id: number | string) {
//   console.log(`Db id is : ${id}`)
// }
getDbId(2)
getDbId("3") // passing the same argument in the parameter

function getDbId(id: number | string) {
    //id.toLowerCase()  'cannot use the string functions bcz of undefined type of id'

    if (typeof id === "string") {
        id.toLowerCase();
    }
}


//Array

const data: number[] = [1, 2, 3, 4];
const data2: string[] = ["1", "2", "3", "4"];
//can add both number and the string in the array
const data3: (number | string)[] = ["1", 2, "3", "d", 9];
 /// array of the both number and the string
 const data4: any[] = ["1", 2, "3", "d", 9]; // or you can use "Any" function
