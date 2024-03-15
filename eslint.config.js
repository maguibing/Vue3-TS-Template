// "eslintConfig": {
//   "extends": [
//     "./.eslintrc-auto-import.json"
//   ],
//   "parserOptions": {
//     "ecmaFeatures": {
//       "jsx": true
//     }
//   }
// }

import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    unocss: true,
  },
)
