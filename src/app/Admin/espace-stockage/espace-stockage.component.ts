import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { GeneralisteService } from 'src/app/services/generaliste.service';

@Component({
  selector: 'app-espace-stockage',
  templateUrl: './espace-stockage.component.html',
  styleUrls: ['./espace-stockage.component.css']
})
export class EspaceStockageComponent implements OnInit {

  constructor(private ar : ActivatedRoute , private service : AdminService , private router:Router , 
    private generalisteService : GeneralisteService) 
  {
    ar.params.subscribe(val => {
      this.ngOnInit();
    })
  }
  test : any ; 
  retrieveResponse: any={};
  base64Data: any;
  id : number ;
  admin : any ; 
  imagePath : string ;
  username : string ;  
  role : string ;
  adminDigital:string ="adminDigital";
  adminMedical:string="adminMedical";
  tabAllGeneraliste : any ; 
  espaceStockageX : number ;
  resss :any=[] ; 
  ngOnInit(){
    this.getAllMedecins();
    this.getAllDr();
    this.generalisteService.getAllGeneralistes().subscribe( data =>{
     
   this.tabAllGeneraliste=data ;

   
    this.service.getUtilisateur(parseInt(localStorage.getItem("idAdmin"))).subscribe(res=>{
     this.test=res ; 
     console.log(this.test.role);
     if(this.test.role === "Medical Manager"){
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
        this.username = this.test.nomPrenom ; 
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
  
    for (let i = 0; i < this.resss.length; i++ ) {
    this.generalisteService.getExpaceStockagePArMEdecin( this.resss[i].id).subscribe(
      response=>{
        this.service.getEspaceMedecin(this.resss[i].id).subscribe(response1=>{
          
     
    this.espaceStockageX=response;
      console.log("Name = ", this.resss[i]);
    var echarts = require('echarts');
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom, 'dark');
    var option;
    
    // prettier-ignore
    let dataAxis = [this.resss[i].nomPrenom];
    // prettier-ignore
    let data = [response1];
   // let yMax = 500;
    let dataShadow = [];
   /* for (let i = 0; i < data.length; i++) {
      dataShadow.push(yMax);
    }*/
    option = {
      backgroundColor:'#1A202E',
      xAxis: {
        data: dataAxis,
        axisLabel: {
          inside: true,
          color: '#fff'
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        z: 10
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#999'
        }
      },
      dataZoom: [
        {
          type: 'inside'
        }
      ],
      series: [
        {
          type: 'bar',
          showBackground: true,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#83bff6' },
              { offset: 0.5, color: '#188df0' },
              { offset: 1, color: '#188df0' }
            ])
          },
          emphasis: {
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#2378f7' },
                { offset: 0.7, color: '#2378f7' },
                { offset: 1, color: '#83bff6' }
              ])
            }
          },
          data: data
        }
      ]
    };
    // Enable data zoom when user click bar.
    const zoomSize = 6;
    myChart.on('click', function (params) {
      console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
      myChart.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue:
          dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
      });
    });
    
    option && myChart.setOption(option);
    
/*var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom, 'dark');
var option;

option = {
  backgroundColor:'#1A202E',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
   /* grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
       axisLabel: {
          formatter: '{value} Go'
        }
    },
    yAxis: {
      type: 'category',
      data: [this.tabAllGeneraliste[i].nomPrenom]
    },
    series: [
      {
        name: 'Espace de stockage ',
        type: 'bar',
        color:"#DB5959",
       
        label: {
          show: true  ,
          color :"#fff",
          borderRadius:15,
        },
        emphasis: {
          focus: 'series'
        },
        data: [this.espaceStockageX , ]
      },
  
    ]
  };


option && myChart.setOption(option);
*/ 
}) });}
 }) 
   
  }
  getAllMedecins(){
    this.generalisteService.getAllGeneralistes().subscribe(
      data =>{
this.tabAllGeneraliste=data ;
      }
    )
  }
  getAllDr(){
    this.service.getAllMedecins().subscribe(
      data =>{
this.resss=data ;

      }
    )
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
