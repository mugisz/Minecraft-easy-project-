import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());


const buildFolder = `./dist`;
const srcFolder   = `./src`;

export const path = {
	build:{
		images:`${buildFolder}/img/`,
		js: 	`${buildFolder}/js/`,
		css: 	`${buildFolder}/css/`,
		html:	`${buildFolder}/`,
		fonts:`${buildFolder}/fonts/`,
		files:`${buildFolder}/files/`
		
	},
	src:{
		images:`${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg:`${srcFolder}/img/**/*.svg`,
		js: 	`${srcFolder}/js/app.js`,
		scss: `${srcFolder}/scss/style.scss`,
		html: `${srcFolder}/*.html`,
		svgicons: `${srcFolder}/svgicons/*.svg`,
		files:`${srcFolder}/files/**/*.*`
	},
	watch:{
		images:`${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		js:	`${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
		html: `${srcFolder}/**/*.html`,
		files:`${srcFolder}/files/**/*.*`
	},
	clean:buildFolder,
	buildFolder:buildFolder,
	srcFolder:srcFolder,
	rootFolder:rootFolder,
	ftp:'test'
}