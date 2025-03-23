const multiply=require('../multiply.js')
describe('multiply test cases',()=>{
    it('should return 6',()=>{
        const result=multiply(2,3)
        expect(result).toBe(6)
    })
})