echo "Enter your commit message:"
read msg

git add .
git commit -m "$msg"
git push -u origin main
