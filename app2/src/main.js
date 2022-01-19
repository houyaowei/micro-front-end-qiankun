import './plugins/element'

import '../src/core/public-path'

console.log("进入app2")

import { lifeCycle, render } from "./core/life-cycle";

/**
 * @name 导出微应用生命周期
 */
 const { bootstrap, mount, unmount } = lifeCycle();
 export { bootstrap, mount, unmount };

 /**
 * @name 单独环境直接实例化vue
 */
const __qiankun__ = window.

__qiankun__ || render();