/**
 * 子应用配置：
 * name需要和各子应用的name保持一致
 * activeRule也同name
 * container统一设置为#app
 */
export const config = [
    {
        defaultLoad: true,
        name: 'app1',
        url: 'http://localhost:6601'
    },
    {
        name: 'app2',
        url: 'http://localhost:6602'
    }
]
