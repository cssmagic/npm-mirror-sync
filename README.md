# npm-mirror-sync

> A CLI tool to make Taobao's npm mirror sync your package immediately.
>
> 让淘宝的 NPM 镜像立即收录你的包的新版本。

## 背景

相信国内的开发者都在用淘宝的 NPM 镜像（[npmmirror.com](https://npmmirror.com/)）作为安装源。而如果你有自己的 NPM 包在维护，那在发版时会有一个小烦恼——发布到 NPM 官方仓库后，镜像仓库并不会立刻同步，可能要等好几分钟才能通过镜像安装刚刚发布的新版。

幸好淘宝 NPM 镜像提供了一个网页，我们可以通过它来手动同步指定的包。于是我写了这个命令行工具来简化这个操作。小巧快捷，简单易用，相信你会用得到。


## 使用方法

1. 这一步是准备工作，是可选的，也就是说你可以跳过这一步。

	但如果你希望每次用到它时速度更快，可以全局安装这个包：

	```sh
	npm i -g npm-mirror-sync
	```

1. 为你的包添加一个脚本。在 `package.json` 中添加如下脚本：

	```json
	{
		"scripts": {
			"postpublish": "npx npm-mirror-sync"
		}
	}
	```

1. 就可以了。以后每次发布新版后，这个脚本就会自动打开同步网页，触发淘宝 NPM 镜像的同步行为。


***

## License

MIT
