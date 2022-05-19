#!/usr/bin/env node
'use strict'

const urlPrefix = 'https://npmmirror.com/sync/'
const pkgName = process.env.npm_package_name

if (!pkgName) {
	const urlReadme = 'https://github.com/cssmagic/npm-mirror-sync#readme'
	console.error('[npm-mirror-sync] Error 404: Package name is missing!')
	console.info('[npm-mirror-sync] See README for more information: ' + urlReadme)
	process.exit(1)
}

const url = urlPrefix + pkgName
const open = require('open')
console.log('[npm-mirror-sync] Trying to open a web page to trigger syncing...')
open(url)
	.then(() => {
		console.log('[npm-mirror-sync] Done. Please check out the web page for results.')
	})
	.catch((err) => {
		console.error('[npm-mirror-sync] Error: ' + err.message || '(unknown error)')
	})
