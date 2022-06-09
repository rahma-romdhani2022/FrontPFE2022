import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel'; // -------- important
@Component({
  selector: 'app-rating-consultation',
  templateUrl: './rating-consultation.component.html',
  styleUrls: ['./rating-consultation.component.css']
})
export class RatingConsultationComponent implements OnInit {

  slides : any[] ; 
  constructor() { }
 
  ngOnInit(): void {
    this.slides = [
      {'image': 'https://picsum.photos/seed/picsum/1200/300'}, 
      {'image': 'https://picsum.photos/seed/picsum/1200/300'},
      {'image': 'https://picsum.photos/seed/picsum/1200/300'}, 
      {'image': 'https://picsum.photos/seed/picsum/1200/300'}, 
      {'image': 'https://picsum.photos/seed/picsum/1200/300'}
    ];
  }
  }


