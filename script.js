// 获取随机元素的函数
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// 解析并生成单词的函数
function generateWord(rule, pron) {
    let pinyin = "";
    let index = 0;
    const length = rule.length;

    while (index < length) {
        const char = rule[index];

        if (char === "(") {
            // 找到可选部分的结束括号
            const endIndex = rule.indexOf(")", index);
            if (endIndex !== -1) {
                const optionalPart = rule.substring(index + 1, endIndex);
                const options = optionalPart.split("/");

                // 随机选择一个选项
                if (options.length > 0) {
                    const chosenOption = getRandomElement(options);
                    for (let i = 0; i < chosenOption.length; i++) {
                        const part = chosenOption[i];
                        if (pron[part]) {
                            pinyin += getRandomElement(pron[part]);
                        }
                    }
                }

                index = endIndex + 1;
            } else {
                break;  // 不匹配的括号，终止解析
            }
        } else if (pron[char]) {
            pinyin += getRandomElement(pron[char]);
            index++;
        } else {
            index++;  // 跳过未识别的字符
        }
    }

    return pinyin;
}

// 生成并显示单词的函数
function generateWords() {
    const rule = document.getElementById("rule").value;
    const customPartsInput = document.getElementById("customParts").value;
    const count = parseInt(document.getElementById("count").value, 10);

    // 初始化发音部分
    const pron = {};

    // 获取并解析自定义部分
    const customParts = customPartsInput.split(";");
    customParts.forEach(part => {
        const [key, values] = part.split("=");
        if (key && values) {
            pron[key.trim()] = values.split(",").map(item => item.trim());
        }
    });

    const output = document.getElementById("output");
    output.innerHTML = "";  // 清空输出

    for (let i = 0; i < count; i++) {
        const word = generateWord(rule, pron);
        const p = document.createElement("p");
        p.textContent = word;
        output.appendChild(p);
    }
}
