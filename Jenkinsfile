node("master") { 
 
    /* Checkout the source */ 
    checkout scm  
 
    /* build stage */ 
    stage('build') { 
        steps { 
          bat 'npm install' 
        } 
    } 
 
    /* testing stage */ 
    stage('test') { 
        steps { 
          bat 'npm test' 
        } 
    } 
 
    /* deploy stage */ 
    stage('deploy') { 
        steps { 
          bat 'npm publish' 
        } 
    } 
} 