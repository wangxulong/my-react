#!/bin/sh

package(){
  docker run --rm -w /workspace -v `pwd`:/workspace \
       node:8.9.4-alpine \
         yarn && npm run build
}


if [[ ${action} == "package" ]]; then
    package
fi




