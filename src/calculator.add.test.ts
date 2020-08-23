import add from './calculator' 

test("1 + 2 = 3", () => {
    let result = add(1,2)
    expect(result).toBe(3)
})