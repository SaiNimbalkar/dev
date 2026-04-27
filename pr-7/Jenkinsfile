pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/SaiNimbalkar/pr7.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t devops-app .'
            }
        }

        stage('Test Application') {
            steps {
                bat 'docker run -d -p 5000:5000 devops-app'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker ps'
            }
        }
    }
}