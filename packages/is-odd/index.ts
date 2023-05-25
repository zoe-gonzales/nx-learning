import { isEven } from "is-even";

export const isOdd = (x: number) => !isEven(x);

console.log("is 3 odd ?", isOdd(3));
