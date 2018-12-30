start:
	yarn docs:dev
build:
	yarn docs:build
	cp -Rf docs/.vuepress/dist/ .
