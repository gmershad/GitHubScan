import { Component, OnInit } from '@angular/core';
import { NutanixService } from '../dataservices/nutanix.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
templateUrl: './app/home/home.html'
})

export class HomeListComponent implements OnInit{
  nutaNixGitHubData: any;
  curPage : number;
  pageSize : number;
  private selectedObj : any;
  private ValueId : number = 1;
  private selectedName: 'java';

  technologies = [
  { id: 1, name: "java" },
  { id: 2, name: "python" },
  { id: 3, name: "javaScript" },
  { id: 4, name: "php" },
  { id: 5, name: "ruby" }
];

  constructor(private nutanixervice: NutanixService, private router:Router) {
    this.curPage = 1;
    this.pageSize = 10;
  }

  ngOnInit() {
   this.getNutanixRepo();
  }

  currentPageClick() {
    this.curPage = this.curPage+1;
     this.getNutanixRepo();
  }

  prevPageClick() {
    this.curPage = this.curPage-1;
     this.getNutanixRepo();
  }

  getNutanixRepo() {
     this.nutanixervice.getNutanixGitHubData(this.selectedName, String(this.curPage)).subscribe(
      (data)=>{
        this.nutaNixGitHubData = data.items;
        console.log(this.nutaNixGitHubData);
    });
  }

  numberOfPages(){
    return 10;
  };

  private selectedValueObj(id: any) {
     this.ValueId = (id.srcElement || id.target).value;
     for (let i = 0; i < this.technologies.length; i++) {
       if (this.technologies[i].id == this.ValueId) {
         this.selectedObj = this.technologies[i];
         this.selectedName = this.selectedObj.name;
         this.getNutanixRepo();
        }
      }
    }

    showDetails(id: any){
      console.log(id);
      this.router.navigate(['/detail', {'id': id}]);
  };
}
