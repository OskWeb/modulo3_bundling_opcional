import devConfig from './webpack.dev.js';
import prodConfig from './webpack.prod.js';

function webpackEnviromentSelector(env) {
  if (env.development) return devConfig;
  if (env.production) return prodConfig;
  return devConfig;
}

export default webpackEnviromentSelector;
