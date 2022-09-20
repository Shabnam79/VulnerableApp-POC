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
                sh "npx cypress run --browser electron --spec sample_spec.js"
            }
        }
  }
}
