BASE_HREF=/github-analytics-angular
rm -fr docs/*
cp src/index.html src/index.html.org
mkdir -p docs && ./node_modules/.bin/ng build --base-href=$BASE_HREF/ --deploy-url=$BASE_HREF/ && cp -R dist/github-analytics-angular/* docs
mv src/index.html.org src/index.html