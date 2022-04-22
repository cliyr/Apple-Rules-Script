# Clash for Windows

- [GitHub](https://github.com/Fndroid/clash_for_windows_pkg)
- [Documentation](https://docs.cfw.lbyczf.com/)


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
    - any:53，在 Clash Premium 2022.04.17 版本中支持该选项。以直接劫持所有的系统 DNS，并直接有 Clash 中配置的 DNS 接管。
    - 1.1.1.1， 在 Clash Premium 2022.04.17 之前的版本中必须写明所有的系统 DNS 以劫持，进而才能让 Clash 中配置的 DNS 接管。