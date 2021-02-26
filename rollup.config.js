import {terser} from 'rollup-plugin-terser'
import cjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

export default [{
  input: ['src/pubsub-text-short.js'],
  output: [{
    file: './dist/pubsub-text-short.js',
    format: 'es'
  }, {
    file: './dist/pubsub-text-short.cjs',
    format: 'cjs'
  }],
  plugins: [
    resolve({preferBuiltins: false}),
		cjs()
  ]
}, {
  input: ['src/pubsub-text-short.js'],
  output: [{
    file: './dist/pubsub-text-short.min.js',
    format: 'es'
  }, {
    file: './dist/pubsub-text-short.min.cjs',
    format: 'cjs'
  }],
  plugins: [
    resolve({preferBuiltins: false}),
		cjs(),
		terser()
  ]
}]
