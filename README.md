# WordCraft
WordCraft is a conlang words generator that allows users to define custom parts and rules for generating words combinations.

## Features
- Generate words based on user-defined rules.
- Customize the parts (C, V, N, O) and add new parts (e.g. X, Y, Z).
- Specify the number of words to generate.

# Usage
1. Enter a rule in the "Enter Rule" field, For example: `C(VN/O)`.
2. Enter custom parts in the "Enter Custom Parts" field. For example: `C=b, p, m, f; V=a, o, i ,e u; N=n,ng; X=x, y, z`.
3. Specify the number of words to generate in the "Number of Words to Generate" field.
4. CLick the "Generate Words" button to see the generated words.

## Examples
- Rule: `C(VN/O)`
  - Custom Parts: `C=b, p, m, f; V=a, o ,e, i ,u; N=n, ng; O=ai, ei, ao, ou`
  - Output: `ban, pan, man, fan, bai, pei, mao, fou, ...`
- Rule: `CVN`
  - Custom Parts: `C=b, p, m, f; V=a, o ,e, i ,u; N=n, ng`
  - Output: `ban, pan, man, fan, bang, peng, mang, fang`

# More
## Contributing
Contributions are welcome! Please feel free to submit a PR.
## License
This project is licensed under the [Mozilla Public License 2.0](http://mozilla.org/MPL/2.0/").
## Acknowledgements
- This project was inspired by Awkwords, [NewLoremGen](https://github.com/kobe-koto/NewLoremGen).
- And with a lot of help from [ChatGPT 4o](https://chat.openai.com).
