import { Multiply } from "../multiply"

test("product of two number will be displayed",()=>{
    const result=Multiply(5,2)
    expect(result).toBe(10);

})