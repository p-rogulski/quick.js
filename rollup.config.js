import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import configPrd from './rollup.prd.config';

const configDefault={
  input: './src/quick.js',
  output: {
    file: './build/quick.js',
    format: 'cjs',
    name: 'quick'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ],
};


export default commandLineArgs => {
  if (commandLineArgs.configDev) {
    return configDefault;
  }
  return configPrd(configDefault);
}

