import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
export default{
    input: "index.ts",
    output: [
    {
        file: 'dist/index.js',
        format: "esm",
        name: "ezpsy",
        sourcemap: 'inline'
    }
    ],
    plugins: [
        typescript(),
        babel({
            exclude: 'node_modules/**' // 只编译我们的源代码
        })
    ]
}