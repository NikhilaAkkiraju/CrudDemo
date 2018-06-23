import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
  
  private url='http://localhost:8080/posts';
  constructor(private http:  Http) { }

  getPost() : Observable<any> {
    return this.http.get(this.url);
  }

  createPost(post) : Observable<any>{
    return this.http.put(this.url+"/add", post);
  }

  updatePost(post) : Observable<any>{
    return this.http.post(this.url+"/modify", post);
  }

  deletePost(id) : Observable<any>{
    return this.http.delete(this.url+'/delete/'+id);
  }

  getPostByID(id) : Observable<any>{
    return this.http.get(this.url+"/post/"+id);
  }

}
