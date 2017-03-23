node("master") { 
 
    /* Checkout the source */ 
    checkout scm  
 
    /* build stage */ 
    stage('build') { 
        bat 'npm install' 
    } 
 
    /* testing stage */ 
    stage('test') { 
		bat 'npm test' 
    } 
 
    /* deploy stage */ 
    stage('deploy') { 
		bat 'npm publish' 
    } 
} 