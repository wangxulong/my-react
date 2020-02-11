#!/bin/sh
action=$1

package(){
 echo '开始打包'
  docker run --rm -w /workspace -v `pwd`:/workspace \
       node:8.9.4-alpine \
         yarn && npm run build
 echo '结束打包'
}


if [[ ${action} == "package" ]]; then
    package
fi




