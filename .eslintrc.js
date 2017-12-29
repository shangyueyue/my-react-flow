module.exports = {
    root: true,
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        //缩进采用4个空格
        "indent": [2, 4],
        //换行符编码采用unix编码。尤其是Git应该统一采用unix编码，防止不必要的提交。
        "linebreak-style": [2, "unix"],
        //使用单引号表示字符串
        "quotes": [2, "single"],
        //不能遗漏分号，一个完整代码语句应该以分号结尾
        "semi": [2, "always"],
        //在定义对象或数组时，最后一项不能加逗号
        "comma-dangle": [2, "never"],
        //在写逗号时，逗号前面不需要加空格，而逗号后面需要添加空格
        "comma-spacing": [2, { "before": false, "after": true }],
        //该规则规定了在对象字面量语法中，key和value之间的空白，冒号前和冒号后面都需要一个空格
        "key-spacing": [2, { "beforeColon": true, "afterColon": true }],
        //如果逗号可以放在行首或行尾时，那么请放在行尾
        "comma-style": [2, "last"],
        //非空数组中不应该有多余的空格
        'array-bracket-spacing': [2, 'never'],
        //this的别名应该为that
        'consistent-this': [2, 'that'],
        //每一行最大字符数为110
        'max-len': [2, 110], // airbnb use 100, wishlist, one day
        // 规定callback如果具有err参数，那么应该处理它，打印err 或者 error，一般在node环境下出现。
        "handle-callback-err": [2, "^(err|error)$" ],
        //构造函数首字母大写
        "new-cap": [2, { "newIsCap": true, "capIsNew": false }],
        //禁止使用Array构造函数。视情况而定，一般情况下应该禁止。
        "no-array-constructor": 2,
        //禁止使用arguments.caller和arguments.callee，一般情况下应该禁止。
        "no-caller": 2,
        //label和var申明的变量不能重名
        "no-label-var": 2,
        //禁止使用label语句，主要防止循环复杂化，禁止go语句。
        "no-labels": [2, {"allowLoop": false, "allowSwitch": false}],
        //不要使用__proto__
        "no-proto": 2,
        //不要和自身作比较
        "no-self-compare": 2,
        //禁止对一些关键字或者保留字进行赋值操作，比如NaN、Infinity、undefined、eval、arguments等。
        "no-shadow-restricted-names": 2,
        //不要使用with语句
        "no-with": 2,
        //换行时，运算符在行尾。一般在出现在字符串拼接时
        'operator-linebreak': [2, 'after'], // aibnb is disabling this rule

        //生产环境应该禁止console，错误级别为2
        'no-console': 0, // airbnb is using warn .products should error
        //给参数重新赋值不会报告错误。但是，建议不要给参数重新赋值。
        'no-param-reassign': 0,
        //直接使用Object.prototype上的方法不会报错。但是，建议不要直接使用，应该以Object.prototype.method.call(）形式来使用
        'no-prototype-builtins': 0,


        //关于模块的引入方法，现阶段多为混用模块，故禁止提示。
        'import/no-unresolved': 0,
        'import/no-named-as-default': 0,
        'import/extensions': 0,
        'import/no-extraneous-dependencies': 0,
        'import/prefer-default-export': 0,

        //react(jsx)组件的事件处理方法名应该以handle开头，而传入props作为事件处理方法时，props名应该以on开头
        'react/jsx-handler-names': [2, { // airbnb is disabling this rule
            eventHandlerPrefix: 'handle',
            eventHandlerPropPrefix: 'on',
        }],
        //不限定propTypes的使用方法，主要防止一些可替换的用法被报错。
        'react/forbid-prop-types': 0, // airbnb use error

        //react组件文件的后缀为.js
        'react/jsx-filename-extension': [2, {extensions: ['.js']}], // airbnb is using .jsx
        //可以使用dangerouslySetInnerHTML属性
        'react/no-danger': 0, // airbnb is using warn
        //不应该直接修改this.state
        'react/no-direct-mutation-state': 2, // airbnb is disabling this rule
        //propsType的声明顺序应该按字母排序
        'react/sort-prop-types': 2, // airbnb do nothing here.
        //react的组件缩进4个空格
        "react/jsx-indent": [2,4],
        //react的组件的属性换行缩进4个空格
        "react/jsx-indent-props": [2,4],
        //标签闭合前有空格< />
        "react/jsx-space-before-closing":[2,"always"],
        "react/jsx-wrap-multilines":[2,{declaration: true, assignment: true, return: true}]
    }
};