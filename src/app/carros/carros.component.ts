import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
// import {GetAllPlatforms} from './store/platforms.actions';

@Component({
  selector: 'app-carros',
  template: `
    <router-outlet></router-outlet>`,
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  /**
   * Display error message if load of carros fails
   */
  loadingError(error) {
    if (error) {
      console.log(error)
      alert('Error while loading the list of carros');
    }
  }

  actionSuccess(done: boolean, message: string) {
    if (done) {
      alert(message);
      this.router.navigate(['/carros']);
    }
  }

  actionError(error, message: string) {
    if (error) {
      alert(message);
    }
  }
}
