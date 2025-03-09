function FindProxyForURL(url, host)
{
    // . が含まれない場合。つまりローカルドメイン
    if (isPlainHostName(host))
        return "DIRECT";

    // ローカルIP宛の通信は direct
    if (isInNet(host, "192.168.0.0", "255.255.0.0"))
        return "DIRECT";

    // ドメイン名に基づくproxyの設定
    if (shExpMatch(host, "youtube.com"))
        return "PROXY 192.168.11.64:10080";
    else if (shExpMatch(host, "*.youtube.com"))
        return "PROXY 192.168.11.64:10080";

    // どこにも合致しない場合は、諦めて direct 接続
    return "DIRECT";
}
