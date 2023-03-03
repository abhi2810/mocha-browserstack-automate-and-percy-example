import org.jenkinsci.plugins.pipeline.modeldefinition.Utils

def user
node {
    try {
        stage('Pull repository from GitHub') {
            git credentialsId: 'samirans-bs_demo_jenkins', url: 'git@github.com:abhi2810/mocha-browserstack-automate-and-percy-example.git', branch:'main'
        }

        stage('Create Percy build and upload snapshots') {
            sshagent(['samirans-bs_demo_jenkins']) {
                sh label: '', returnStatus: true, script: '''#!/bin/bash -l
                            export BROWSERSTACK_USERNAME=${secret}
                            export BROWSERSTACK_ACCESS_KEY=${secret}
                            export PERCY_TOKEN=${secret}
                            source ~/.bashrc
                            nvm use 16
                            npm install
                            npm run test:percy
                        '''
            }
        }
    } catch (e) {
        currentBuild.result = 'FAILURE'
        throw e
    } finally {
        cleanWs()
    }
}
