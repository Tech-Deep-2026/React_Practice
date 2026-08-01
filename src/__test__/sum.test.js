import { sum } from "../Components/Sum";

test("Sum function should calculate sum",()=>{

    const result = sum(2,4);
    expect(result).toBe(6);
})