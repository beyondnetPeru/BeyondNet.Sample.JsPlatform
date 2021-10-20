const { parser } = require('./index')

const genericDataMock = {
    customField: '',
    keyword: '',
    operator: '',
    value: '',
    hasCustomField: false
}

describe('Should be succesful building query', () => {
    it('when single query is valid', () => {
        const result = parser('FirstName EQUAL TO Juan')

        const expectedResult = {
            successful: true,
            error: null,
            data: [{
                ...genericDataMock,
                keyword: 'FirstName',
                operator: 'EQUAL TO',
                value: 'Juan'
            }]
        }
        expect(result).toStrictEqual(expectedResult)
    })
    it('when we send multiple valid queries', () => {
        const result = parser('Afid EQUAL TO 502572 AND Source Code EQUAL TO ma-empirebc AND State EQUAL TO NJ')

        const expectedResult = {
            successful: true,
            error: null,
            data: [{
                ...genericDataMock,
                keyword: 'Afid',
                operator: 'EQUAL TO',
                value: '502572'
            },
            {
                ...genericDataMock,
                keyword: 'Source Code',
                operator: 'EQUAL TO',
                value: 'ma-empirebc'
            },
            {
                ...genericDataMock,
                keyword: 'State',
                operator: 'EQUAL TO',
                value: 'NJ'
            }]
        }
        expect(result).toStrictEqual(expectedResult)
    })
    it('when operator is IS', () => {
        const result = parser('Has Distributions Is true')

        const expectedResult = {
            successful: true,
            error: null,
            data: [{
                ...genericDataMock,
                keyword: 'Has Distributions',
                operator: 'Is',
                value: 'true'
            }]
        }
        expect(result).toStrictEqual(expectedResult)
    })
    it('when operator is IS 2', () => {
        const result = parser('LMKT Lead Status Is Accepted')

        const expectedResult = {
            successful: true,
            error: null,
            data: [{
                ...genericDataMock,
                keyword: 'LMKT Lead Status',
                operator: 'Is',
                value: 'Accepted'
            }]
        }
        expect(result).toStrictEqual(expectedResult)
    })
    it('when property has 3 words', () => {
        const result = parser('LMKT Lead Status Is Accepted')

        const expectedResult = {
            successful: true,
            error: null,
            data: [{
                ...genericDataMock,
                keyword: 'LMKT Lead Status',
                operator: 'Is',
                value: 'Accepted'
            }]
        }
        expect(result).toStrictEqual(expectedResult)
    })
    it('when is using between', () => {
        const result = parser('Age Between 12,35')

        const expectedResult = {
            successful: true,
            error: null,
            data: [{
                ...genericDataMock,
                keyword: 'Age',
                operator: 'Between',
                value: '12,35'
            }]
        }
        expect(result).toStrictEqual(expectedResult)
    })
    it('when is using custom Field', () => {
        const result = parser('Lead Field:Oniwabanshu EQUAL TO yes')

        const expectedResult = {
            successful: true,
            error: null,
            data: [{
                ...genericDataMock,
                keyword: 'Lead Field',
                operator: 'EQUAL TO',
                value: 'yes',
                customField: 'Oniwabanshu',
                hasCustomField: true
                
            }]
        }
        expect(result).toStrictEqual(expectedResult)
    })
})

describe('Should throw an error', () => {
    it('when only property is added', () => {
        const result = parser('First Name')
        
        const expectedResult = {
            successful: false,
            error: "Syntax is incorrect. An Operator (ex: EQUAL TO, IN, CONTAINS) is needed after a Property.",
            data: [{
                ...genericDataMock,
                customField: '',
                keyword: 'First Name',
                operator: '',
                value: ''
            }]
        }
        expect(result).toStrictEqual(expectedResult)
    })
    it('when value is missing', () => {
        const result = parser('First Name EQUAL TO')
        
        const expectedResult = {
            successful: false,
            error: "Syntax is incorrect. The operator EQUAL TO requires a value.",
            data: [{
                ...genericDataMock,
                keyword: 'First Name',
                operator: 'EQUAL TO',
                value: ''
            }]
        }
        expect(result).toStrictEqual(expectedResult)
    })

    it('when invalid operator is used', () => {
        const result = parser('Distribution Has Elements')
        
        const expectedResult = {
            successful: false,
            error: "Syntax is incorrect. An Operator (ex: EQUAL TO, IN, CONTAINS) is needed after a Property.",
            data: [{
                ...genericDataMock,
                customField: '',
                keyword: 'Distribution Has Elements',
                operator: '',
                value: ''
            }]
        }
        expect(result).toStrictEqual(expectedResult)
    })

    it('when no customField is defined', () => {
        const result = parser('Lead Field: EQUAL TO yes')
        
        const expectedResult = {
            successful: false,
            error: "Syntax is incorrect. No custom field name was provided.",
            data: [{
                ...genericDataMock,
                keyword: 'Lead Field',
                operator: 'EQUAL TO',
                value: 'yes',
                hasCustomField: true
            }]
        }
        expect(result).toStrictEqual(expectedResult)
    })
})

