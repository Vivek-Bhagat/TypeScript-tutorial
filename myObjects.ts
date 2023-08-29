type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number;
}

let myUser: User = {
    _id: "1234",
    name: "Vivek",
    email: "h@gmail.com",
    isActive: false
}

myUser.email = "m@gmail.com"
//myUser._id = "fdh" // cannot assign to '_id' because it is a read only property