pipeline{
    agent{
        docker{
            image "cypress/browsers:latest"
            args '--entrypoint='
        }
    }

    stages{
        stage('installer dependances'){
            steps{
                sh 'npm ci'
            }
        }
        stage('test'){
            steps{
                sh 'npx cypress run'
            }
        }
    }
}