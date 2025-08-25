pipeline{
    agent{
        docker{
            image "cypress/browsers:latest"
            args '--entrypoint='
        }
    }

    stages{
        stage('Hey'){
            steps{
                echo 'Hello from jenkinsfile'
            }
        }
    }
}