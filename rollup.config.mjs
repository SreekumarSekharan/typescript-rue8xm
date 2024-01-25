import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

const extensions = ['.js', '.ts', '.html'];
const prod = false;

function output() {
  const output = {
    dir: 'dist',
    format: 'iife',
    sourcemap: true,
  };
  prod && (output.plugins = [terser()]);
  return output;
}

export default {
  input: ['src/app.ts'],
  strictDeprecations: true,
  output: output(),
  plugins: [
    resolve({ extensions, browser: true }),
    commonjs({ sourcemap: true }),
    babel({
      extensions,
      babelHelpers: 'inline',
      include: ['src/**/*'],
      presets: [
        ['@babel/preset-typescript'],
        [
          '@babel/preset-env',
          {
            targets: { browsers: '> 2%, ie >= 11' },
            modules: false,
            spec: true,
            forceAllTransforms: true,
            useBuiltIns: 'usage',
            corejs: { version: 3, proposals: false },
          },
        ],
      ],
      plugins: [
        ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
        ['@babel/proposal-class-properties'],
        ['@babel/proposal-object-rest-spread'],
        ['@babel/plugin-transform-arrow-functions'],
      ],
    }),
  ],
};
