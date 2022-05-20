# npm-mirror-sync

> A CLI tool to make Taobao's npm mirror sync your package immediately.
>
> 让淘宝的 NPM 镜像立即收录你的包的新版本。

## 背景

相信国内小伙伴都在用淘宝的 NPM 镜像（[npmmirror.com](https://npmmirror.com/)）作为安装源，速度确实更快。不过有时候也会有一个小烦恼——我自己维护的包发布到 NPM 官方仓库后，镜像仓库并不会立刻同步，可能要等好几分钟才能生效。

幸好淘宝 NPM 镜像提供了一个同步网页，我们可以通过它来手动同步指定的包。于是我写了这个命令行工具来简化这个操作。小巧快捷，简单易用，相信你也用得到。


## 使用方法

1. 全局安装这个包：

	```sh
	npm i -g npm-mirror-sync
	```

1. 在你的包里为 `package.json` 添加如下脚本：

	```json
	{
		"scripts": {
			"postpublish": "npx npm-mirror-sync"
		}
	}
	```

1. 这样就可以了。以后每次发布新版后，这个脚本就会自动打开淘宝 NPM 镜像的同步网页，让你发的新版立即生效。

> **补充说明**：其实上面的第 1 步并不是必须的，因为 npx 可以自动安装本地不存在的包。但从 npm@7 开始，npx 在自动安装包时需要用户在命令行手动确认，体验并不顺畅，因此还是建议全局安装。资深用户自行取舍吧。

***

## License

MIT
