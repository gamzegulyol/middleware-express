const {parseURL,parseQueryString} = require('../queryString');

describe("testing querystring", () => {
    test("url is parsed", () => {
        const exampleURL = "http://localhost:8080/?page=2&limit=3"
        expect(parseURL(exampleURL).query).toBe("page=2&limit=3");       
    })
    test("converted to object",() =>{
        const exampleURL= "http://localhost:8080/?page=2&limit=3"
        const queryString = parseQueryString(exampleURL);
        //expect(parseQueryString(queryString).toBe("{"page":"2","limit":"3"}));
    })
})