pipeline {
    agent any
     options {
        ansiColor('xterm')
    }
  stages {
        stage('Build'){  
            steps {
                echo "Building the application"
            }
        }
       stage('Testing') {
            steps {
                sh "npm i"
                sh "npx cypress run --browser chrome --spec sample_spec.js"
            }
        }
  }
}
