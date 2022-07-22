module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    coverageThreshold: {
        global: {
            statements: 0,
            branches: 0,
            functions: 0,
            lines: 0,
        },
        // './src/components/': {
        //     statements: 0,
        //     branches: 0,
        //     functions: 0,
        //     lines: 0,
        // },
    },
};
