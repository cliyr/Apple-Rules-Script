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
      # - any:53
      - 1.1.1.1
      - 114.114.114.114
    auto-route: true
    auto-detect-interface: true

```

- 其中的 dns.listen 在使用 TUN 模式时，可以不配置。