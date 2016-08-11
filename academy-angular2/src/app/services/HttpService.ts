import {Http, Headers} from '@angular/http';

export class HttpServiceBase {
    private _http: Http;
    protected get http(): Http {
        return this._http;
    }

    private _getJsonHeaders: Headers;
    protected get getJsonHeaders(): Headers {
        return this._getJsonHeaders;
    }
    
    private _sendJsonHeaders: Headers;
    protected get sendJsonHeaders(): Headers {
        return this._sendJsonHeaders;
    }

    private _baseUrl: string;
    protected get baseUrl(): string {
        return this._baseUrl;
    }

    constructor(http: Http, baseUrl: string) {
        this._http = http;
        this._baseUrl = baseUrl;

        this._getJsonHeaders = new Headers({'Accept': 'application/json'});
        this._sendJsonHeaders = new Headers({"Accept" : "application/json", "Content-Type": "application/json"});
    }

    protected logError(error: string): void {
        console.error('[ERROR]: ' + error);
    }
}
