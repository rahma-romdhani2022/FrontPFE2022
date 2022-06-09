import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import * as echarts from 'echarts';
import { StatDrService } from 'src/app/services/StatDr.service';
import { StatAppService } from 'src/app/services/StatApp.service';
@Component({
  selector: 'app-profil-doctor',
  templateUrl: './profil-doctor.component.html',
  styleUrls: ['./profil-doctor.component.css']
})
export class ProfilDoctorComponent implements OnInit {
test : boolean =true;
test5 : boolean =true;
test2 : boolean =true;
test3 : boolean =true;
test4 : boolean =true;
admin : any ; 
imageAdmin : any ; 
retrieveResponse: any={};
base64Data: any;
roleMedical :string ="" ; 
roleDigital :string ="";
idExpert : number ; 
expertARecperere : any ; 
deamnde1 : number ; 
deamnde2 : number ; 
deamnde3 : number ; 
deamnde4 : number ; 
deamnde5 : number ; 
testt : number ;
deamnde6 : number ; 
deamnde7 : number ; 
deamnde8 : number ; 
deamnde9 : number ; 
deamnde10 :number ; 
deamnde11 :number ; 
deamnde12 :number ; 


 
reponse1 : number ; 
reponse2 : number ; 
reponse3 : number ; 
reponse4 : number ; 
reponse5 : number ; 
reponse6:  number ; 
reponse7 : number ; 
reponse8 : number ; 
reponse9 : number ; 
reponse10 :number ; 
reponse11 :number ; 
reponse12 :number ; 
year : number ;

  constructor(private ar : ActivatedRoute , private service : AdminService ,private serviceApp : StatAppService,
    private serviceUser : UserServiceService ,  private router : Router,   private statDr : StatDrService)
  {
    ar.params.subscribe(val => {
      this.ngOnInit();
    })
  }
 
  ngOnInit() {
    this.getAnnee() ; 
    this.ar.paramMap.subscribe((x)=>{
      this.idExpert =+ x.get('id');
      console.log("id : " , this.idExpert);
   } )
  this.GetExpertByID() ; 
    this.service.getUtilisateur(parseInt(localStorage.getItem("idAdmin"))).subscribe(res=>{
      this.admin= res ; 
      if(this.admin.role==="Medical Manager") {
        this.roleMedical=this.admin.role  ;

      }
      else{
       this.roleDigital=this.admin.role ; 
      }
      this.roleDigital=this.admin.role  ;
      if(this.admin.image ==null){
        this.imageAdmin="./assets/imagesD/faces/user.jpg"
      }
      else{
        this.imageAdmin = "http://localhost:8281/adminMedical/getImage/"+this.admin.id}
      console.log(this.admin)
        }) ; 
      
    $(".toggle-password").click(function() {

      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $($(this).attr("toggle"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
   
  }
   
GetExpertByID(){
  this.serviceUser.getData(this.idExpert).subscribe(data=>{
    this.expertARecperere= data ; 
  })
}
getAnnee() {
  this.serviceApp.getAnnnee().subscribe(data=>{
    this.year = data ; 
  })
}

  logout() {
    localStorage.removeItem('nameAdmin');
    localStorage.removeItem('role');
    localStorage.removeItem('emailAdmin');
    localStorage.removeItem('idAdmin');
    localStorage.removeItem('token');
    this.service.islogin = false;
    this.router.navigate(['']);
    window.localStorage.clear();
  }
}

