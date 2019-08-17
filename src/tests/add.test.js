const add = (a,b) => a + b
const generateGreeting = (name) => `Hello ${name}!`

test('test add', () => {
    const result = add(3,4)
    expect(result).toBe(7)
})

test('test generate greeting', () => {
    const result = generateGreeting('Nick')
    expect(result).toBe('Hello Nick!')
})