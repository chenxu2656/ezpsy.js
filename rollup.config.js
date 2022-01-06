import typescript from '@rollup/plugin-typescript';
export default{
    input: "index.ts",
    output: [
    {
        file: 'dist/index.js',
        format: "umd",
        name: "EZPSY",
        sourcemap: 'inline'
    }
    ],
    plugins: [typescript()]
}