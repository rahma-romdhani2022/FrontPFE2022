import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AvisServiceService } from 'src/app/services/avis.service';

@Component({
  selector: 'app-ajout-avis',
  templateUrl: './ajout-avis.component.html',
  styleUrls: ['./ajout-avis.component.css']
})
export class AjoutAvisComponent implements OnInit {
  formGroup1: FormGroup;
  formGroup2: FormGroup;
   isLinear = false;
  name  = '';
imagePath :string=null;
user :any={};
expert : any={};
retrieveResponse: any={};
base64Data: any;
test : string = "rahma" ; 
nom_Expert : string="" ; 
id : number ; 
idConsultation:number ;
consultation: any ;
images: any[] = [];
  constructor(private _formBuilder: FormBuilder , private service : UserServiceService ,
     private router : Router , private ar : ActivatedRoute , private serviceAvis : AvisServiceService)
  {
    ar.params.subscribe(val => {
      this.ngOnInit();
    })
  }
  ngOnInit() {
    
    this.ar.paramMap.subscribe((x)=>{
      this.idConsultation =+ x.get('idConsultation');  }) ; 
   
      console.log( "idd consultationnnn:",this.idConsultation)
     this.getConsultation();
    this.id=parseInt(localStorage.getItem("id")) ; 
    this.service.getData(parseInt(localStorage.getItem('id'))).subscribe(data=>{
      this.user=data
            if(this.user.image ==null){
              this.imagePath="./assets/imagesD/faces/user1.png"
            }
            else{
              this.imagePath=this.imagePath ; 
            
            this.retrieveResponse = this.user;
            this.base64Data = this.retrieveResponse.image;
            this.imagePath = 'data:image/jpeg;base64,' + this.base64Data; }
    
  }) ;
    // mtaa dropdown 
    $( "#menu" ).on( "click", function()
    {
      $( "#menu23" ).fadeToggle( "fast" );
    });
    this.formGroup1 = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.formGroup2 = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
  confimerOperation(){
    Swal.fire({
     
      icon: 'success',
      title: 'Votre avis a  bien ajouter',
      showConfirmButton: false,
      timer: 2000
    })
    this.router.navigate(['/accueil'])
  }
  getConsultation(){
    this.serviceAvis.getConsultationID( this.idConsultation).subscribe((params => {
    this.consultation = params;
    console.log("consultationnnnnnnn " , this.consultation)
   if (this.consultation.image1_Droite  == null) {
      this.imagePath = "assets/123.jpg"}

    else {

      this.retrieveResponse = this.consultation;
      this.base64Data = this.retrieveResponse.image1_Droite;
      this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
      this.images[0] = this.imagePath;
      console.log("lulaa", this.images[0]);
    }

    if (this.consultation.image2_Droite == null) {
      this.imagePath = "assets/123.jpg"
    }
    else {

      this.retrieveResponse = this.consultation;
      this.base64Data = this.retrieveResponse.image2_Droite;
      this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
      this.images[1] = this.imagePath;
      console.log("lqqsulaa", this.images[1]);
    }

    if (this.consultation.image3_Droite == null) {
      this.imagePath = "assets/123.jpg"
    }
    else {

      this.retrieveResponse = this.consultation;
      this.base64Data = this.retrieveResponse.image3_Droite;
      this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
      this.images[2] = this.imagePath;
      console.log("lqqsulaa", this.images[2]);
    }
    if (this.consultation.image4_Droite == null) {
      this.imagePath = "assets/123.jpg"
    }
    else {

      this.retrieveResponse = this.consultation;
      this.base64Data = this.retrieveResponse.image4_Droite;
      this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
      this.images[3] = this.imagePath;
      console.log("lqqsulaa", this.images[3]);
    }
    if (this.consultation.image5_Droite == null) {
      this.imagePath = "assets/123.jpg"
    }
    else {

      this.retrieveResponse = this.consultation;
      this.base64Data = this.retrieveResponse.image5_Droite;
      this.imagePath = 'data:image/jpeg;base64,' + this.base64Data;
      this.images[4] = this.imagePath;
      console.log("lqqsulaa", this.images[4]);
    }

  
  
}));
  }

   logout() {
    localStorage.removeItem('name');
    localStorage.removeItem('token');
    this.service.islogin = false;
  this.router.navigate(['']);
      ///location.reload();
  }
}