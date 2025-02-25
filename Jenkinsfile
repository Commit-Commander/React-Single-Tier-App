@Library("jenkins_shared_library") _

pipeline {
    
    agent { label "dev" }
    
    stages {
        stage("Clone") {
            steps {
                script {
                    clone("https://github.com/Commit-Commander/React-Single-Tier-App", "main")
                }
            }
        }
        stage("Build") {
            steps {
                script {
                    build()
                }
            }
        }
        stage("Push") {
            steps {
                script {
                    push("dockerHubCreds", "react-single-tier-app")
                }
            }
        }
        stage("Deploy") {
            steps {
                script {
                    deploy()
                }
            }
        }
        stage("Clean Up") {
            steps {
                script {
                    clean_up()
                }
            }
        }
    }

    post {
        success {
            script {
                emailext from: "kartikeynarayan9598@gmail.com",
                    to: "kartikey.narayan@inc.in",
                    subject: "Jenkins Action",
                    body: "The Jenkins pipeline has completed successfully. 🚀"
            }
        }
        failure {
            script {
                emailext from: "kartikeynarayan9598@gmail.com",
                    to: "kartikey.narayan@inc.in",
                    subject: "Jenkins Action",
                    body: "The Jenkins pipeline has failed. ❌"
            }
        }
    }
}
