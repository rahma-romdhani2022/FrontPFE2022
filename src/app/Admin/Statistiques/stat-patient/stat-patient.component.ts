import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { StatAppService } from 'src/app/services/StatApp.service';
import { StatDrService } from 'src/app/services/StatDr.service';
import { StatPatientService } from 'src/app/services/StatPatient.service';

@Component({
  selector: 'app-stat-patient',
  templateUrl: './stat-patient.component.html',
  styleUrls: ['./stat-patient.component.css']
})
export class StatPatientComponent implements OnInit {
 test : any ; 
  retrieveResponse: any={};
  base64Data: any;
  id : number ;
  admin : any ; 
  imagePath : string ;
  username : string ;  
  role : string ;
  adminDigital:string ="admiDigital";
  adminMedical:string="adminMedical" ;
  roleMedical:string ="";
  roleDigital:string ="";
  nbrSup50 : number ; 
  nbrInf50 : number ; 
  /**************************/
  janvier : number ; 
  fevrier : number ; 
  mars : number ; 
  avril : number ; 
  mai : number ; 
  juin : number ; 
  juil : number ; 
  aout : number ;
  septembre : number ;  
  octobre : number ; 
  nov: number ; 
  decembre : number ; 
  nbrHomme : number ; 
  nbrFemme : number ; 
  AnneeActuel : number ; 
  allPatientsSainSelonAutoDetection : number ; 
  allPatientsMaladeSelonAutoDetection : number ;
  maladie1 : number ; 
  maladie2 : number ; 
  maladie3 : number ; 
  maladie4 : number ; 
  sain : number;
  constructor(private service : AdminService , private router : Router , private ar : ActivatedRoute
    ,private  statPatients : StatPatientService , private statApp : StatAppService)
  {
    ar.params.subscribe(val => {
      this.ngOnInit();
    })
  }

 
 

  ngOnInit(){
   this.getAnnee();
   this.statPatients.getAllSain().subscribe(data=>{
    this.sain= data ; 
      this.statPatients.getAllPatientsSupA50().subscribe(data=>{
      this.nbrSup50=data ; 
      this.statPatients.getAllPatientsInfA50().subscribe(data=>{
      this.nbrInf50=data ; 
      this.statPatients.getAllPatientsParMonth(1).subscribe(data=>{
      this.janvier=data ; 
      this.statPatients.getAllPatientsParMonth(2).subscribe(data=>{
      this.fevrier=data ; 
      this.statPatients.getAllPatientsParMonth(3).subscribe(data=>{
      this.mars=data ; 
      this.statPatients.getAllPatientsParMonth(4).subscribe(data=>{
      this.avril=data ; 
      this.statPatients.getAllPatientsParMonth(5).subscribe(data=>{
      this.mai=data ; 
      this.statPatients.getAllPatientsParMonth(6).subscribe(data=>{
      this.juin=data ; 
      this.statPatients.getAllPatientsParMonth(7).subscribe(data=>{
      this.juil=data ; 
      this.statPatients.getAllPatientsParMonth(8).subscribe(data=>{
      this.aout=data ; 
      this.statPatients.getAllPatientsParMonth(9).subscribe(data=>{
      this.septembre=data ; 
      this.statPatients.getAllPatientsParMonth(10).subscribe(data=>{
      this.octobre=data ; 
      this.statPatients.getAllPatientsParMonth(11).subscribe(data=>{
      this.nov=data ; 
      this.statPatients.getAllPatientsParMonth(12).subscribe(data=>{
      this.decembre=data ; 
     // chart 2
      this.statPatients.getAllPatientsHomme().subscribe(data=>{
        this.nbrHomme = data ; 
      this.statPatients.getAllPatientsFemme().subscribe(data=>{
        this.nbrFemme= data ; 

      this.statPatients.getAllNbrMaladie1().subscribe(data=>{
        this.maladie1= data ; 
 
      this.statPatients.getAllNbrMaladie2().subscribe(data=>{
        this.maladie2= data ; 
        
    this.statPatients.getAllNbrMaladie3().subscribe(data=>{
      this.maladie3= data ; 

    this.statPatients.getAllNbrMaladie4().subscribe(data=>{
      this.maladie4= data ; 
    
    this.service.getUtilisateur(parseInt(localStorage.getItem("idAdmin"))).subscribe(res=>{
     this.test=res ; 
     console.log(this.test.role);
     if(this.test.role === "Medical Manager"){
       this.roleMedical =this.test.role ; 
      this.username = this.test.nomPrenom ; 
      console.log(parseInt(localStorage.getItem('idAdmin')))
      console.log(localStorage.getItem("nameAdmin"))
      this.service.getAdminMedicall(parseInt(localStorage.getItem('idAdmin'))).subscribe(data=>{
        this.admin=data
              if(this.admin.image ==null){
                this.imagePath="./assets/imagesD/faces/user.jpg"
              }
              else{
                this.imagePath = "http://localhost:8281/adminMedical/getImage/"+this.admin.id}
              console.log(this.imagePath)
              this.role=this.admin.role;  }) ;
     }
     else{
       if(this.test.role === "Digital Manager"){
         this.roleDigital=this.test.role ; 
        this.username = localStorage.getItem("nameAdmin");
        console.log(parseInt(localStorage.getItem('idAdmin')))
        console.log(localStorage.getItem("nameAdmin"))
        this.service.getAdminDigitall(parseInt(localStorage.getItem('idAdmin'))).subscribe(data=>{
          this.admin=data
                if(this.admin.image ==null){
                  this.imagePath="./assets/imagesD/faces/user.jpg"
                }
                else{
                  this.imagePath = "http://localhost:8281/adminDigital/getImage/"+this.admin.id}
                console.log(this.imagePath)
                this.role=this.admin.role;  }) ;
       }
     }
    })
//chart les pathologies 
this.statPatients.getAllPAtientsSainsAutoDetection().subscribe(response=>{
  this.allPatientsSainSelonAutoDetection = response ; 

  this.statPatients.getAllPAtientsMAladesAutoDetection().subscribe(response=>{
    this.allPatientsMaladeSelonAutoDetection = response ; 

  

    var echarts = require('echarts');

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom, 'dark');
var option;

option = {
  backgroundColor:'#1A202E',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['Patients']
  },
  toolbox: {
    show: true,
    feature: {
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juielle' , 'Aout','Septemre','Octobre','Novembre','Decembre']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Patients',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      color: '#5D6E69',
      emphasis: {
        focus: 'series'
      },
      data: [this.janvier, this.fevrier, this.mars,this.avril, this.mai, this.juin, this.juil, this.aout , this.septembre , this.octobre ,this.nov , this.decembre]
    }
  ]
};

option && myChart.setOption(option);
/******** chart 2 */

var app = {};

var chartDom = document.getElementById('main2');
var myChart = echarts.init(chartDom, 'dark');
var option;

option = {
  backgroundColor:'#1A202E',
  legend: {},
  toolbox: {
    feature: {
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  dataset: {
    source: [
      ['product', 'Homme', 'Femme'],
      ['Patients', this.nbrHomme, this.nbrFemme],
     // ['Ophtalmologues',50, 80]
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [
    { type: 'bar', color: '#599AF3' },
    { type: 'bar', color: '#FB8E99' }
  ]
};

option && myChart.setOption(option);
/********************* chart 3 */

var chartDom = document.getElementById('main3');
var myChart = echarts.init(chartDom, 'dark');
var option;

option = {
  backgroundColor:'#1A202E',
  toolbox: {
    show: true,
    feature: {
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)'
  },
  legend: {
    top: 440,
    data: [
      'Patients Patologiques',
      'Patients Sains',
      'Le trou maculaire',
      'rétinopathie diabétique',
      'Patients Saines',
      'Le décollement de rétine',
      'DMLA',
    ]
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      selectedMode: 'single',
      radius: [0, '30%'],
      label: {
        position: 'inner',
        fontSize: 14
      },
      labelLine: {
        show: false
      },
      data: [
        { value: this.sain, name: 'Patients Sains' },
        { value: this.maladie1+this.maladie2+this.maladie3+this.maladie4
          , name: 'Patients Malades' , selected: true}
      ]
    },
    {
      name: 'Patients',
      type: 'pie',
      radius: ['45%', '60%'],
      labelLine: {
        length: 30
      },
      label: {
        formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
        backgroundColor: '#F6F8FC',
        borderColor: '#8C8D8E',
        borderWidth: 1,
        borderRadius: 4,
        rich: {
          a: {
            color: '#6E7079',
            lineHeight: 22,
            align: 'center'
          },
          hr: {
            borderColor: '#8C8D8E',
            width: '100%',
            borderWidth: 1,
            height: 0
          },
          b: {
            color: '#4C5058',
            fontSize: 14,
            fontWeight: 'bold',
            lineHeight: 33
          },
          per: {
            color: '#fff',
            backgroundColor: '#4C5058',
            padding: [3, 4],
            borderRadius: 4
          }
        }
      },
      data: [
        { value: this.sain, name: 'Patients Saines' },
        { value: this.maladie1, name: 'Le trou maculaire' },
        { value: this.maladie2, name: 'Le décollement de rétine' },
        { value: this.maladie3, name: 'rétionpathie diabétique' },
        { value: this.maladie4, name: 'DMLA' },

      ]
    }
  ]
};

option && myChart.setOption(option);
// chart age 
var chartDom = document.getElementById('mainage');
var myChart = echarts.init(chartDom, 'dark');
var option;

console.log("fo9 50" , this.nbrSup50 , "ta7t 50" , this.nbrInf50)
option = {
  backgroundColor:'#1A202E',
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: this.nbrSup50, name: 'Superieur a 50' },
        { value: this.nbrInf50 , name: 'Inferieur  a 50' }
          
       
      ]
    }
  ]
};

option && myChart.setOption(option);
}) 
})  })  })  })  })  })  }) }) }) }) })   }) }) })})
})}) })}) })
})      })                               
  }

  getAnnee(){
    this.statApp.getAnnnee().subscribe(parms=>{
    this.AnneeActuel=parms ; });
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
