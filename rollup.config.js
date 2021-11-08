// rollup.config.js
import path from 'path'
import json  from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'   //查找外部模块插件
import commonjs from 'rollup-plugin-commonjs' 
import typescript from 'rollup-plugin-typescript'
import {eslint} from 'rollup-plugin-eslint'
import packageJson from './package.json'

const extensions = [
    '.js',
    '.ts',
    '.tsx'
]

//ts
const tsPlugin = ({
    tsConfig: './tsconfig.json',
    extensions
})

//eslint 
const esPlugin = eslint({
    throwonError: true,
    include: ['src/**/*.ts'],
    exclude: ['node_modules/**','lib/**']
})
export default [{
    // 核心选项
    input: 'src/ezpsy.ts',     // 必须
    output: [
        {  
            file: packageJson.main,    
            format: "cjs",  // common js
        },
        {
            file: packageJson.module,
            format: 'es'  //Es6 export 
        }
    ],
    Plugins: [
        typescript({
            exclude: "node_modules/**",
            typescript: require('typescript')
        }),
        resolve(),
        json(),
        
    ]
  }]