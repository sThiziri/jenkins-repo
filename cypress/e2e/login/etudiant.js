import Etudiant from "../../pages/etudiant.page.cy";


let et = new Etudiant("Thiziri")
et.afficherLeNom();
et.adresse.ville = "Gentilly";