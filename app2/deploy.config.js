module.exports = {
  projectName: "my-vue",
  privateKey: "./.ssh/id_rsa",
  passphrase: "123456",
  cluster: [],
  dev: {
    name: "dev",
    script: "npm run build",
    host: "192.168.0.54",
    port: 22,
    username: "root",
    password: "123456",
    distPath: "dist",
    webDir: "/usr/local/nginx/html/test",
    bakDir: "/usr/local/nginx/backup",
    isRemoveRemoteFile: false,
    isRemoveLocalFile: true
  },
  test: {
    name: "test",
    script: "npm run build",
    host: "192.168.0.55",
    port: 22,
    username: "root",
    password: "123456",
    distPath: "dist",
    webDir: "/usr/local/nginx/html/test",
    bakDir: "/usr/local/nginx/backup",
    isRemoveRemoteFile: true,
    isRemoveLocalFile: true
  }
};
