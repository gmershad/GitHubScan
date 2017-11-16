import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NutanixService } from '../dataservices/nutanix.service';
import { Observable } from 'rxjs/Observable;

@Component({
templateUrl: './app/detail/repodetail.html'
})

export class DetailComponent implements OnInit {
  private selectRepoOwner;
  nutaNixOwnerData: any;
  gitHubOwnerFollowers: any;

  constructor(private route: ActivatedRoute, private nutanixervice: NutanixService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.selectRepoOwner = params['id']; 
      this.getNutOwneranixRepo();
      this.getGitOwnerFollowers();
    });
  }

  getNutOwneranixRepo() {
    this.nutanixervice.getNutanixGitHubOwnerData(this.selectRepoOwner).subscribe(
      (data)=>{
        this.nutaNixOwnerData = data.items[0];
        console.log(this.nutaNixOwnerData);
    });
  }

    getGitOwnerFollowers() {
    this.nutanixervice.getGitHubOwnerFollowers(this.selectRepoOwner).subscribe(
      (data)=>{
        this.gitHubOwnerFollowers = data;
        console.log(this.gitHubOwnerFollowers);
    });
  }
}
