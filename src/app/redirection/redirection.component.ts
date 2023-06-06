import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-redirection',
  templateUrl: './redirection.component.html',
  styleUrls: ['./redirection.component.css']
})
export class RedirectionComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    const shortCode = this.route.snapshot.params['shortCode'];
    this.http.get<any>(`http://localhost:8080/api/redirect/${shortCode}`)
      .subscribe(response => {
        if (response.redirectURL) {
          window.location.href = response.redirectURL;
        } else {
          // Handle case when the short URL doesn't exist
          this.router.navigate(['/']);
        }
      }, error => {
        console.log(error);
        // Handle error case and display appropriate message to the user
        this.router.navigate(['/']);
      });
  }
}
