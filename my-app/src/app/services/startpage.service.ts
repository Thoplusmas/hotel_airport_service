import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiListService {

    constructor(private http: HttpClient) { }

    getApiList() {
        return this.http.get<any>('/apimodel')
            .toPromise()
            .then(res => { return res; });
    }

    getApiListWithoutPayload(firstrow?: number, offset?: number) {
        if (firstrow != undefined && offset != undefined) {
            return this.http.get<any>('/search/distinct?limit=' + offset + '&skip=' + firstrow)
            .toPromise()
            .then(res => { return res; });
        } else {
            return this.http.get<any>('/search/distinct')
            .toPromise()
            .then(res => { return res; });
        }
    }

    getDistinctListCount() {
        return this.http.get<any>('/search/distinct/count')
            .toPromise()
            .then(res => { return res; });
    }

    getApiListSearch(searchQuery: string) {
        return this.http.get<any>('/search', {
                params: {
                    q: searchQuery
                }
            })
            .toPromise()
            .then(res => { return res; });
    }
}