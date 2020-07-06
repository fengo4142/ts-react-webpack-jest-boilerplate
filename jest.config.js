module.exports = {
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.svg|png|scss$": "<rootDir>/test/transformer.ts"
  },
  "testRegex": "(/test/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  "setupFilesAfterEnv": ["<rootDir>/test/setupTest.ts"],
  "transformIgnorePatterns": ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ]
};