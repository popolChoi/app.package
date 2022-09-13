
module.exports = {
  
	"plugins": ["react"],
	"extends": [
		"react-app",
		// "prettier",
		// "./react.js",
	],
	rules: {
		"indent": ["error", "tab"],

		//다중빈줄 없음
		'no-multiple-empty-lines': ['warn', { max: 3, maxEOF: 1, maxBOF: 2 }],
		// jsx에서도 indent tab으로 통일
		'react/jsx-indent' : [2, 'tab'], 
		// jsx의 속성에도 tab으로 indent 적용
		'react/jsx-indent-props': [2, 'tab'], 
		
		//선언은 되었지만 해당 값이 읽히지는 않음
		// "no-unused-vars": false, 
	},

};