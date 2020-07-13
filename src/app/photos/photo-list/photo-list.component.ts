import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

	photos: Photo[] = [];
	filter: string = '';

	constructor(private activatedRoute: ActivatedRoute) {}

	ngOnInit(): void { 
		this.photos = this.activatedRoute.snapshot.data['photos'];
	}
}
