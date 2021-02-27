import {terser} from 'rollup-plugin-terser'
import cjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

export default [{
  input: ['src/pubsub-text-short.js'],
  output: [{
    exports: 'auto',
    file: './dist/pubsub-text-short.browser.js',
    format: 'es'
  }, {
    exports: 'auto',
    file: './dist/pubsub-text-short.js',
    format: 'cjs'
  }],
  plugins: [
    resolve({preferBuiltins: false}),
		cjs()
  ]
}, {
  input: ['src/pubsub-text-short.js'],
  output: [{
    exports: 'auto',
    file: './dist/pubsub-text-short.min.browser.js',
    format: 'es'
  }, {
    exports: 'auto',
    file: './dist/pubsub-text-short.min.js',
    format: 'cjs'
  }],
  plugins: [
    resolve({preferBuiltins: false}),
		cjs(),
		terser()
  ]
}]
