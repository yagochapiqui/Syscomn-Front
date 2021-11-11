import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  options: FormGroup;

  constructor(private router: Router) {
    
   }

  ngOnInit(): void {
    this.router.navigate(['home'])
  }

}
