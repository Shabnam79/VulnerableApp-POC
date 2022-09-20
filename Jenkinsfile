pipeline {
    agent any
  stages {
        stage('Build'){  
            steps {
                echo "Building the application"
            }
        }
       stage('Testing') {
            steps {
                sh "npm i"
            }
        }
       stage('e2e Tests') {
            steps {
                sh 'npm run cypress:ci'
            }
        }
  }
}
