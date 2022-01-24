# portal

## 子应用注册
在config/config.js文件声明子应用。这些应用在portal启动时，会被读取并转换成single-spa要求的参数

```
{
   defaultLoad: true,
   name: 'app1',
   url: 'http://localhost:6601'
}


```

