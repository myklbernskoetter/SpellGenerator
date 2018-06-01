import 'babel-polyfill';
import { filterActions, loadActions } from './lib/bundle-utility';

const loaded = loadActions(filterActions([
  {
    selector: 'html',
    // load: [require('./modules/sample')],
    load: [require('./modules/build-spell')],
  },
]));
