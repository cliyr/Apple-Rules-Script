# Clash for Windows

- [GitHub](https://github.com/Fndroid/clash_for_windows_pkg)
- [Documentation](https://docs.cfw.lbyczf.com/)


## 配置

### mixin

基本配置：

```conf
mixin: # object
  dns:
    enable: true
    ipv6: false # default is false
    # listen: 0.0.0.0:53
    enhanced-mode: redir-host
    nameserver:
      - https://dns.alidns.com/dns-query
    fallback:
      - https:/********.d.adguard-dns.com/dns-query
    fallback-filter:
      geoip: true
      geoip-code: CN
      ipcidr:
        - 240.0.0.0/4
  tun:
    enable: true
    stack: system
    dns-hijack: # DNS 劫持
      - any:53
      # - 1.1.1.1
      # - 114.114.114.114
    auto-route: true
    auto-detect-interface: true
```

- dns.listen 在使用 TUN 模式时，可以不配置。
- tun.
  - dns-hijack
    - `any:53`，亦可直接 `any`。

      在 Clash Premium 2022.04.17 版本中支持该选项。以直接劫持所有的系统 DNS，并直接有 Clash 中配置的 DNS 接管。
    - 1.1.1.1，

      在 Clash Premium 2022.04.17 之前的版本中必须写明**所有**的系统/局域网 DNS 以劫持，进而才能让 Clash 中配置的 DNS 接管。
## macOS

### 安装

全新安装/替换安装，会遭遇“文件已损坏”的问题。执行下面的命令，可以解决这个问题：

```bash
sudo xattr -r -d com.apple.quarantine /Applications/Clash\ for\ Windows.app
```

需要 sudo 权限

### 配置

节点/策略/规则，就用订阅转换

其他配置使用 mixin 进行覆盖配置

## Windows

### General => Port 为 0，而不是默认的 7890

使用管理员权限执行下列命令：

```CMD
net stop winnat
netsh int ipv4 add excludedportrange protocol=tcp startport=7890 numberofports=1
net start winnat
```

### Service Mode 无法安装

1. 确保系统安装了 .NET Framework Runtime
2. 点击 General 中的 Home Directory 打开文件夹，进入 service 子目录中。并使用管理员权限执行下列代码

    ```CMD
    service.exe install
    service.exe start
    ```
 3. 重启 Clash for Windows

### tun.stack 设置为 system 会导致 tun 无法正常工作

设置为 gvisor 后，正常工作。

参考：
- [不同设备 gvisor 与 system 产生极其反差的性能表现 ](https://github.com/Fndroid/clash_for_windows_pkg/issues/1936)


## 控制面板

General => Clash Core => 点击版本号，可唤起 clash.razord.top 的控制面板。

但假如是全新的登陆，默认的端口号和密码是错误的，或为空。需要重新配置，不然无法进入控制面板。

而端口号和密码，在浏览器地址栏中的参数中可以找到。

- 端口： port
- 密码： secret

复制粘贴具体的参数值即可。