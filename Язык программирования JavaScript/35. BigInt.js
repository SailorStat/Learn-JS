//? BigInt
const bigNumber = 1234123412341234123412341234123412341234
const sameBigint = BigInt("1234123412341234123412341234123412341234")
const sameBigint2 = 1234123412341234123412341234123412341234n
console.log(bigNumber)
console.log(bigNumber == sameBigint)
console.log(sameBigint2 === sameBigint)

//* при делении BigInt округляются в меньшую сторону

//! нельзя смешивать числа BigInt с обычными