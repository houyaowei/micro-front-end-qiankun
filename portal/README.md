# portal

### 子应用注册
在config/config.js文件声明子应用。portal启动时，该文件会被读取并转换成single-spa要求的参数

```
{
   defaultLoad: true,
   name: 'app1',
   url: 'http://localhost:6601'
}


```

参数说明: 

- defaultLoad：启动后默认加载的应用，原则上只配置一个。如果有多个，默认加载第一个。
- name：应用名称
- url：子应用部署地址

