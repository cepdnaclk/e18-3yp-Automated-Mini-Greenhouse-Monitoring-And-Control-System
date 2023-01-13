const PasswordValid = require('../features/Validate/PasswordValid')


test("returns false for empty password", () => {
    expect(PasswordValid("")).toBe(false)
  })
   test("returns false for password without numbers", () => {
     expect(PasswordValid("aksjgkaasdf")).toBe(false)
   })
   test("returns false for password without letters", () => {
     expect(PasswordValid("1251234563246")).toBe(false)
   })
   test("returns true for password with numbers, letters, >= 8 characters", () => {
     expect(PasswordValid("125a12667")).toBe(true)
   })
   test("returns false for password with numbers, letters, < 8 characters", () => {
     expect(PasswordValid("a1")).toBe(false)
   })
   test("returns true for password with numbers, uppercase letters, and >= 8 characters", () => {
     expect(PasswordValid("12512ASDFA")).toBe(true)
   })
   test("returns true for password with numbers, uppercase and lowercase letters, and >= 8 characters", () => {
    expect(PasswordValid("12512ASDasdfasd")).toBe(true)
   })