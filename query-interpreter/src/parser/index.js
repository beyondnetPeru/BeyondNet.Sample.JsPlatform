const defaultConsts = require('../util/defaultConsts')

let mainOperatorStarters, mainOperators

const setup = (starters, operators) => {
    this.mainOperatorStarters = starters
    this.mainOperators = operators
}

const preCheck = str => {
    if (str.substring(str.length - 5).includes(" AND"))
        return { isValid: false, message: "Join operator AND cannot be alone. Query should start with a Property."}

    return { isValid: true}
}

const lex = (string) => {
    const newStr = string.replace(/ AND /g, " and ")
    return newStr.split(" and ")
}

const isNextOperator = operator => {
    const list = mainOperatorStarters ? mainOperatorStarters : defaultConsts.starters
    return list.includes(operator.toLowerCase())
}

const isOperator = operator => {
    const list = mainOperators ? mainOperators : defaultConsts.operators
    return list.includes(operator.toLowerCase())
}

const requiresValue = operator => {
    return defaultConsts.operatorsRequireValues.includes(operator.toLowerCase())
}

const extractCustomField = keyword => {
    if (keyword.includes(':'))
        return { customField: keyword.split(':')[1], keyword: keyword.split(':')[0], hasCustomField: true}
    
    return {customField: '', keyword, hasCustomField: false}
}

const isValidSintax = ({ keyword, operator, value, customField, hasCustomField }) => {
    const response = { isValid: false, message: ''}
    if (!keyword || keyword === ""|| isOperator(keyword))
        return {...response, message: "Syntax is incorrect. Query should start with a Property."}
    if (!operator || operator === "")
        return {...response, message: "Syntax is incorrect. An Operator (ex: EQUAL TO, IN, CONTAINS) is needed after a Property."}
    if ((!value || value == "") && requiresValue(operator))
        return {...response, message: `Syntax is incorrect. The operator ${operator} requires a value.`}
    if (!isOperator(operator))
        return {...response, message: `Syntax is incorrect. Operator is invalid, or you could be missing and 'AND'. `}
    if (hasCustomField && !customField)
        return {...response, message: `Syntax is incorrect. No custom field name was provided.`}
    return {isValid: true}
}

const parser = str => {
    
    let queries = []
    let response = { successful: false, data: [], error: null}
try {

    const precheckResult = preCheck(str)

    if (!precheckResult.isValid)
        throw precheckResult.message
    
    const lexed = lex(str)

    lexed.forEach(query => {
        const arr = query.split(" ")

        let keyword = ''
        let operator = ''
        let value = ''
        
        let propertyopen, operatoropen
        for (let i = 0; i < arr.length; i++) {
            
            if (i == 0) {
                keyword = arr[i]
                propertyopen = true
            } else 
            {
                if (isNextOperator(arr[i]) && !operatoropen) {
                    propertyopen = false
                    operator = operator + arr[i]
                    operatoropen = true
                }
                else {
                    if (propertyopen) {
                        keyword = keyword + " " + arr[i]
                    } else if (isOperator(operator)) {
                        operatoropen = false

                        if (!value)
                            value = arr[i]
                        else 
                            value = value + " " + arr[i]

                    } else if (operatoropen){
                        operator = operator + " " + arr[i]
                    }
                } 
            }
        }

        const extractedKeyword = extractCustomField(keyword)
        
        const quer = {
            ...extractedKeyword,
            operator,
            value
        }

        queries.push(quer)

        const validationResult = isValidSintax({...quer})
        if (!validationResult.isValid){
            throw validationResult.message
        }
            
    })

    return {...response, successful: true, data: queries}
    
} catch (error) {
    return {...response, error: error, data: queries }
    }
}

module.exports = { parser, setup }