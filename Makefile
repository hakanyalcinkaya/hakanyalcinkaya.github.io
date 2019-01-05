start:
	yarn docs:dev
build:
	yarn docs:build
	cp -Rf docs/.vuepress/dist/ .
count-md:
	ls -d docs/**/*.md | wc -l
sitemap:
	npm run sitemap-build
