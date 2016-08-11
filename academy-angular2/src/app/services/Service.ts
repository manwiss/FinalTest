import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/last';

import {IReadOnlyService, ReadOnlyServiceBase} from './ReadOnlyService';

export interface IService<TIn, TOut> extends IReadOnlyService<TOut> {
    postItem(item: TIn): Observable<Response>;
    postItems(items: TIn[]): Observable<any>;
    deleteItem(id: string): Observable<Response>;
    deleteItems(ids: string[]): Observable<any>;
}

export abstract class ServiceBase<TIn, TOut> 
    extends ReadOnlyServiceBase<TOut> 
    implements IService<TIn, TOut> {

    constructor(http: Http, baseUrl: string) {
        super(http, baseUrl);
    }
    
    public postItem(item: TIn): Observable<Response> {
        return this.postItemInternal(item, '');
    }

    public postItems(items: TIn[]): Observable<any> {
        return this.postItemsInternal(items, '');
    }
    
    public deleteItem(id: string): Observable<Response> {   
        return this.deleteItemInternal(id, '');
    }
    
    public deleteItems(ids: string[]): Observable<any> {   
        return this.deleteItemsInternal(ids, '');
    }
    
    protected postItemInternal(item: TIn, hostUrl: string): Observable<Response> {
        let data: string = JSON.stringify(item);

        return this.postData(data, hostUrl);
    }

    protected postItemsInternal(items: TIn[], hostUrl): Observable<any> {
        return Observable.from(items).flatMap(item => 
            this.postItemInternal(item, hostUrl)).last().map(_ => null);
    }
    
    protected deleteItemInternal(id: string, hostUrl: string): Observable<Response> {        
        return this.http.request(hostUrl + this.baseUrl + id, { method: "DELETE", headers: this.getJsonHeaders });
    }
    
    protected deleteItemsInternal(ids: string[], hostUrl: string): Observable<any> {
        return Observable.from(ids).flatMap(id => 
            this.deleteItemInternal(id, hostUrl)).last().map(_ => null);
    }

    private postData(data: string, hostUrl: string): Observable<Response> {
        return this.http
            .request(hostUrl + this.baseUrl, { body: data, method: "POST", headers: this.sendJsonHeaders });
    }
}
