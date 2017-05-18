import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {UrlData} from "../../common/urldata";

@Injectable()
export class HomeService {
  constructor(private http: Http,
              private urlData: UrlData) {
  }

  findArticle(param: any) {
    return this.http
      .get(this.urlData.baseUrl + `v1/article`, param)
      .map(res => res.json());
  }

}
