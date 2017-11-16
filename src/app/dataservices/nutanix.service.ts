import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'

@Injectable()
export class NutanixService {
  private NutanixGitHubUrl = 'https://api.github.com/search/repositories';
  private NutanixGitOwner = 'https://api.github.com/search/users';
  private GitHubOwnerFollower = 'https://api.github.com/users/';
    
    constructor(private http: Http){}
    getNutanixGitHubData(tech : string, page: string){
        var url = this.NutanixGitHubUrl + '?q=' +tech+'?page=' + page;
        return this.http.get(url).map((res)=>res.json());
    }

    getNutanixGitHubOwnerData(owner : string){
        var url = this.NutanixGitOwner + '?q=' + owner;
        return this.http.get(url).map((res)=>res.json());
    }

    getGitHubOwnerFollowers(owner : string){
        var url = this.GitHubOwnerFollower + owner+ '/followers';
        return this.http.get(url).map((res)=>res.json());
    }
}
