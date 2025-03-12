let mix = require("laravel-mix")
let tailwindcss = require("tailwindcss")
let path = require("path")


mix
	.setPublicPath("public")
	.js("resources/js/field.js", "js")
	.postCss("resources/css/field.css", "css", [tailwindcss("tailwind.config.js")])
