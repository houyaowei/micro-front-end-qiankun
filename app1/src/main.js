import './plugins/element'
import '../src/core/public-path'

import { lifeCycle, render } from "./core/life-cycle";

/**
 * @name 导出微应用生命周期
 */
 const { bootstrap, mount, unmount } = lifeCycle();
 export { bootstrap, mount, unmount };

 /**
 * @name 单独环境直接实例化vue
 */
const __qiankun__ = window.__POWERED_BY_QIANKUN__
console.log('__qiankun__:',__qiankun__)
__qiankun__ || render();

