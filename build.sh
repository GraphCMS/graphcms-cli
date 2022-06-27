source .env

sed -i '' -e "s/GCMS_GH_TOKEN/$GCMS_GH_TOKEN/g" ./dist/**/**/*.js;
