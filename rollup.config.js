import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
export default{
    input: "src/ezpsy.ts",
    output: [
    {
        file: 'dist/index.js',
        format: "esm",
        name: "ezpsy",
        sourcemap: 'inline',
        freeze: false
    },
    ],
    plugins: [
        typescript(),
        babel({
            exclude: 'node_modules/**' // 只编译我们的源代码
        })
    ]
}