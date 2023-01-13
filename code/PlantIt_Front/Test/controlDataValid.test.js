const controlDataValid = require('../features/Validate/controlDataValid')

test1 = {
    minTemp:"",
    maxTemp:"",
    minHumidity:"",
    maxHumidity:"",
    minSoilmoisute:"",
    maxSoilmoisute:"",
    minlightingHours:"",
    maxlightingHours:""
}

test2 = {
    minTemp:"-3",
    maxTemp:"80",
    minHumidity:"-3",
    maxHumidity:"102",
    minSoilmoisute:"-2",
    maxSoilmoisute:"80",
    minlightingHours:"-1",
    maxlightingHours:"-2"
}

test3 = {
    minTemp:"1",
    maxTemp:"69",
    minHumidity:"1",
    maxHumidity:"99",
    minSoilmoisute:"1",
    maxSoilmoisute:"69",
    minlightingHours:"1",
    maxlightingHours:"8"
}



test4 = {
    minTemp:"-3",
    maxTemp:"50",
    minHumidity:"5",
    maxHumidity:"6",
    minSoilmoisute:"5",
    maxSoilmoisute:"6",
    minlightingHours:"5",
    maxlightingHours:"6"
}

test5 = {
    minTemp:"3",
    maxTemp:"80",
    minHumidity:"5",
    maxHumidity:"6",
    minSoilmoisute:"5",
    maxSoilmoisute:"6",
    minlightingHours:"5",
    maxlightingHours:"6"
}

test6 = {
    minTemp:"5",
    maxTemp:"6",
    minHumidity:"-3",
    maxHumidity:"4",
    minSoilmoisute:"2",
    maxSoilmoisute:"5",
    minlightingHours:"6",
    maxlightingHours:"5"
}

test7 = {
    minTemp:"5",
    maxTemp:"6",
    minHumidity:"4",
    maxHumidity:"102",
    minSoilmoisute:"2",
    maxSoilmoisute:"5",
    minlightingHours:"6",
    maxlightingHours:"5"
}

test8 = {
    minTemp:"5",
    maxTemp:"6",
    minHumidity:"4",
    maxHumidity:"6",
    minSoilmoisute:"-2",
    maxSoilmoisute:"5",
    minlightingHours:"6",
    maxlightingHours:"5"
}

test9 = {
    minTemp:"5",
    maxTemp:"6",
    minHumidity:"4",
    maxHumidity:"6",
    minSoilmoisute:"2",
    maxSoilmoisute:"80",
    minlightingHours:"6",
    maxlightingHours:"5"
}

test10 = {
    minTemp:"5",
    maxTemp:"6",
    minHumidity:"4",
    maxHumidity:"6",
    minSoilmoisute:"2",
    maxSoilmoisute:"6",
    minlightingHours:"-2",
    maxlightingHours:"5"
}

test11 = {
    minTemp:"5",
    maxTemp:"6",
    minHumidity:"4",
    maxHumidity:"6",
    minSoilmoisute:"2",
    maxSoilmoisute:"6",
    minlightingHours:"2",
    maxlightingHours:"-5"
}

test("returns true for empty data", () => {
    expect(controlDataValid(test1)).toBe(true)
  })
  test("returns false for values in out of boundary for All fields", () => {
    expect(controlDataValid(test2)).toBe(false)
  })
   test("returns true for boundary values in All fields", () => {
     expect(controlDataValid(test3)).toBe(true)
   })
   test("returns false for minTemp=-3", () => {
     expect(controlDataValid(test4)).toBe(false)
   })
   test("returns false for maxTemp=80", () => {
    expect(controlDataValid(test5)).toBe(false)
   })
   test("returns false for minHum=-3", () => {
    expect(controlDataValid(test6)).toBe(false)
   })
   test("returns false for maxHum=102", () => {
    expect(controlDataValid(test7)).toBe(false)
   })
   test("returns false for minSoilmoisture=-2", () => {
    expect(controlDataValid(test8)).toBe(false)
   })
   test("returns false for maxSoilmoisture=80", () => {
    expect(controlDataValid(test9)).toBe(false)
   })
   test("returns false for minlightHours=-2", () => {
    expect(controlDataValid(test10)).toBe(false)
   })
   test("returns false for maxlightingHours=-5", () => {
    expect(controlDataValid(test11)).toBe(false)
   })