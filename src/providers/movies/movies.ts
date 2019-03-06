import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';

@Injectable()
export class Movies {
  _movies: any;

  constructor(public api: Api) { }

  movieList(cate: any) {
    let seq = this.api.post('movies', cate).share();

    seq.subscribe((res: any) => {
        this._moviesList(res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  _moviesList(resp) {
    this._movies = resp.list;
  }
}
