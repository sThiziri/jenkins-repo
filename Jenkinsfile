pipeline{
    agent{
        docker{
            image 'cypress/base:18' 
            args '-u root:root' 
        }
    }

    environment {
        CYPRESS_BASE_URL = 'https://www.saucedemo.com'
    }

    stages{
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('installer dependances'){
            steps{
                echo 'installation npm '
                sh 'npm ci'
            }
        }
        stage('test cypress chrome'){
            steps{
                echo 'exec cypress'
                sh 'npx cypress run'
            }
        }
    }
    post{
        always{
            archiveArtifacts artifacts: 'cypress/cypress/screenshots/**/*.png'
        }
    }
}