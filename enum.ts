
//*Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

enum seatChoice {
    //AISLE=10  we can assign any value to the choice and it will follow down subsequently below
    AISLE,
    MIDDLE,
    WINDOW,
    FOURTH
}

const hcSeat = seatChoice.AISLE