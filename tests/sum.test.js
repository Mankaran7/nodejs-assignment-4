const sum=require("../sum.js")
describe('sum test cases',()=>{
    it('should return 4',()=>{
        const result=sum(2,2)
        expect(result).toBe(4)
    })
})