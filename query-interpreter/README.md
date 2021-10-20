# lead-query-interpreter

lead-query-interpreter is a Javascript library  that can interpret queries and returns an object with property, operator and value.

## Installation

Use the npm to install foobar. Set up an .nmprc file pointing to the platform registry in myget. 

```bash
@platformuxui:registry=https://cignium.myget.org/F/uxui/npm/
```

```bash
npm install @platformuxui/lead-query-interpreter
```

## Usage

```javascript
import parse from 'lead-query-interpreter'

parse("First Name EQUALS TO JHON")
parse("FirstName EQUALS TO 'JHON' AND LastName EQUALS TO 'DOE'")
```

## Query Language

The interpreter supports queries in the form of:

```bash
[keyword] [operator] [value(s)]
```
Example:
```bash
First Name EQUAL TO Juan
```
The interpreter supports multiple values, separated by commas:

```bash
Age BETWEEN 12,36
```
It also supports custom fields contained inside properties (like extended fields). The should be indicaded after the main property name using a ':'

```bash
Extended Field:IsOnline EQUAL TO Yes
```

The resuting object will be constructed as follows:
```bash
{ customField, keyword, operator, value }
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
