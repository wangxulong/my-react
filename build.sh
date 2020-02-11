#!/bin/sh
action=$1

package(){
 echo '开始打包'
  docker run --rm -w /workspace -v `pwd`:/workspace \
       node \
         yarn && npm run build
 echo '结束打包'
}

deploy(){
  echo "开始发布"
    docker-compose down
    docker-compose up -d
  echo "结束发布"
}


if [[ ${action} == "package" ]]; then
    package
fi
if [[ ${action} == 'deploy' ]]; then
    deploy
fi



