pipeline {
    agent any
    stages {
      stage("编译"){
         steps{
            sh "chmod 777 ${env.WORKSPACE}/build.sh &&  ${env.WORKSPACE}/build.sh package"
          }
      }
       stage("发布"){
               steps{
                  sh "  ${env.WORKSPACE}/build.sh deploy"
                }
            }
    }
}