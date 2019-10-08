#!/usr/bin/env node

const fs = require('fs')
const CURR_DIR = process.cwd()
const ncp = require('ncp').ncp

const createDir = async (path, newProjectPath) => {
	const filesToCreate = fs.readdirSync(path).filter(item => {
		const copy = /^package.+$/
		return item.match(copy) !== null
	})
	const destination = `${CURR_DIR}/${newProjectPath}`

	const result = await mkdir(destination)
	
	const source = CURR_DIR
	const copyNodeModules = await copyDir({source: `${path}/node_modules`, destination: destination + '/node_modules'})
	const copySrc = await copyDir({ source: `${path}/src`, destination: destination + '/src'})
	for (const file of filesToCreate) {
		await copyDir({ source: `${path}/${file}`, destination: `${destination}/${file}`})
	}
}

const mkdir = (path) => {
	try {
		return new Promise((resolve, reject) => {
			return fs.mkdir(path, (err) => {
				if (err) {
					return false
				}
				return resolve(true)
			})
		})
	}
	catch (err) {
		console.log(err)
		return false
	}
}

const copyDir = ({ source, destination }) => {
	return new Promise((resolve, reject) => {
  	ncp(source, destination, (err) => {
   		if (err) {
    		console.error('Error while copying folder contents.', err)
    		reject(err)
    		return
   		}
   		resolve()
  	})
 	})
}

const path = `${__dirname}`
const projectName = process.argv[2]
if (projectName === void 0 || projectName === '') {
	console.log('Please enter project name')
	console.log('run create-express-api <NAME_OF_PROJECT>')
	process.exit()
}

createDir(path, projectName)
console.log(`${projectName} was successfully created\nrun\ncd ${projectName} && npm start`)
