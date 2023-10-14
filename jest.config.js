module.exports = {
    preset : 'react-native',
    moduleFileExtensions : ['js' , 'jsx', 'ts' , 'tsx' , 'json'],
    transform : {
        '^.+\\.(js|jsx|ts|tsx)$' : require.resolve('babel-jest')
    },
    testMatch : ['**/__tests__/**/*.test.js']
}