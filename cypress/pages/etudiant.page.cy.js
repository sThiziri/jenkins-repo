class Etudiant{
    constructor(name){
        this.name=name;
    }

    adresse = {
        ville: "Gentilly",
        code: "94250"
    }
    afficherLeNom(){
        console.log(`-------- Name --------- \n - ${this.name} \n-----------------------`);
                
    }
    
    afficherAdresse(){
        console.log(`------- Adresse ------- \n - Ville : ${this.adresse.ville} \n - Code : ${this.adresse.code}  \n-----------------------`);
        
    }
}

et = new Etudiant("Thiziri");
et.afficherLeNom();
et.afficherAdresse();

export default Etudiant;