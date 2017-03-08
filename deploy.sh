npm run build
git checkout -b gh-pages
mv build/* .
git add .
git commit -m 'deploy'
git push origin gh-pages
git checkout master
git branch -D gh-pages
