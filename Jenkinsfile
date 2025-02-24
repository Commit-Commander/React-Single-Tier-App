pipeline {
    
    agent any
    stages {
        stage("Clone") {
            steps {
                git url: "https://github.com/Commit-Commander/React-Single-Tier-App", branch: "main"
            }
        }
        stage("Build") {
            steps {
                sh "docker build -t react-single-tier-app ."
            }
        }
        stage("Push") {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: "dockerHubCreds",
                    usernameVariable: "dockerHubUsername",
                    passwordVariable: "dockerHubPassword"
                )]) {
                    sh "docker login -u ${env.dockerHubUsername} -p ${env.dockerHubPassword}"
                    sh "docker tag react-single-tier-app ${env.dockerHubUsername}/react-single-tier-app"
                    sh "docker push ${env.dockerHubUsername}/react-single-tier-app"
                }
            }
        }
        stage("Deploy") {
            steps {
                sh "docker compose up -d"
            }
        }
        stage("Clean Up") {
            steps {
                sh "docker system prune -f"
            }
        }
    }
}
