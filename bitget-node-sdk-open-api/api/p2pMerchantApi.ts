/**
 * Bitget Open API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { ApiResponseResultOfMerchantAdvResult } from '../model/apiResponseResultOfMerchantAdvResult';
import { ApiResponseResultOfMerchantInfoResult } from '../model/apiResponseResultOfMerchantInfoResult';
import { ApiResponseResultOfMerchantOrderResult } from '../model/apiResponseResultOfMerchantOrderResult';
import { ApiResponseResultOfMerchantPersonInfo } from '../model/apiResponseResultOfMerchantPersonInfo';
import { ApiResponseResultOfVoid } from '../model/apiResponseResultOfVoid';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.bitget.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum P2pMerchantApiApiKeys {
    ACCESS_KEY,
    ACCESS_PASSPHRASE,
    ACCESS_SIGN,
    ACCESS_TIMESTAMP,
    SECRET_KEY,
}

export class P2pMerchantApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'ACCESS_KEY': new ApiKeyAuth('header', 'ACCESS-KEY'),
        'ACCESS_PASSPHRASE': new ApiKeyAuth('header', 'ACCESS-PASSPHRASE'),
        'ACCESS_SIGN': new ApiKeyAuth('header', 'ACCESS-SIGN'),
        'ACCESS_TIMESTAMP': new ApiKeyAuth('header', 'ACCESS-TIMESTAMP'),
        'SECRET_KEY': new ApiKeyAuth('header', 'SECRET-KEY'),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: P2pMerchantApiApiKeys, value: string) {
        (this.authentications as any)[P2pMerchantApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * P2P merchant adv info
     * @summary advList
     * @param startTime startTime
     * @param endTime endTime
     * @param status status
     * @param type type
     * @param advNo advNo
     * @param coin coin
     * @param languageType languageType
     * @param fiat fiat
     * @param lastMinId languageType
     * @param pageSize pageSize
     * @param orderBy orderBy
     */
    public async merchantAdvList (startTime: string, endTime?: string, status?: string, type?: string, advNo?: string, coin?: string, languageType?: string, fiat?: string, lastMinId?: string, pageSize?: string, orderBy?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ApiResponseResultOfMerchantAdvResult;  }> {
        const localVarPath = this.basePath + '/api/p2p/v1/merchant/advList';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'startTime' is not null or undefined
        if (startTime === null || startTime === undefined) {
            throw new Error('Required parameter startTime was null or undefined when calling merchantAdvList.');
        }

        if (startTime !== undefined) {
            localVarQueryParameters['startTime'] = ObjectSerializer.serialize(startTime, "string");
        }

        if (endTime !== undefined) {
            localVarQueryParameters['endTime'] = ObjectSerializer.serialize(endTime, "string");
        }

        if (status !== undefined) {
            localVarQueryParameters['status'] = ObjectSerializer.serialize(status, "string");
        }

        if (type !== undefined) {
            localVarQueryParameters['type'] = ObjectSerializer.serialize(type, "string");
        }

        if (advNo !== undefined) {
            localVarQueryParameters['advNo'] = ObjectSerializer.serialize(advNo, "string");
        }

        if (coin !== undefined) {
            localVarQueryParameters['coin'] = ObjectSerializer.serialize(coin, "string");
        }

        if (languageType !== undefined) {
            localVarQueryParameters['languageType'] = ObjectSerializer.serialize(languageType, "string");
        }

        if (fiat !== undefined) {
            localVarQueryParameters['fiat'] = ObjectSerializer.serialize(fiat, "string");
        }

        if (lastMinId !== undefined) {
            localVarQueryParameters['lastMinId'] = ObjectSerializer.serialize(lastMinId, "string");
        }

        if (pageSize !== undefined) {
            localVarQueryParameters['pageSize'] = ObjectSerializer.serialize(pageSize, "string");
        }

        if (orderBy !== undefined) {
            localVarQueryParameters['orderBy'] = ObjectSerializer.serialize(orderBy, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.ACCESS_KEY.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.ACCESS_KEY.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.ACCESS_PASSPHRASE.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.ACCESS_PASSPHRASE.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.ACCESS_SIGN.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.ACCESS_SIGN.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.ACCESS_TIMESTAMP.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.ACCESS_TIMESTAMP.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.SECRET_KEY.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.SECRET_KEY.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ApiResponseResultOfMerchantAdvResult;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "ApiResponseResultOfMerchantAdvResult");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * P2P merchant info self
     * @summary merchantInfo
     */
    public async merchantInfo (options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ApiResponseResultOfMerchantPersonInfo;  }> {
        const localVarPath = this.basePath + '/api/p2p/v1/merchant/merchantInfo';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.ACCESS_KEY.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.ACCESS_KEY.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.ACCESS_PASSPHRASE.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.ACCESS_PASSPHRASE.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.ACCESS_SIGN.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.ACCESS_SIGN.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.ACCESS_TIMESTAMP.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.ACCESS_TIMESTAMP.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.SECRET_KEY.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.SECRET_KEY.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ApiResponseResultOfMerchantPersonInfo;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "ApiResponseResultOfMerchantPersonInfo");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * P2P merchant list
     * @summary merchantList
     * @param online online
     * @param merchantId merchantId
     * @param lastMinId lastMinId
     * @param pageSize pageSize
     */
    public async merchantList (online?: string, merchantId?: string, lastMinId?: string, pageSize?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ApiResponseResultOfMerchantInfoResult;  }> {
        const localVarPath = this.basePath + '/api/p2p/v1/merchant/merchantList';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        if (online !== undefined) {
            localVarQueryParameters['online'] = ObjectSerializer.serialize(online, "string");
        }

        if (merchantId !== undefined) {
            localVarQueryParameters['merchantId'] = ObjectSerializer.serialize(merchantId, "string");
        }

        if (lastMinId !== undefined) {
            localVarQueryParameters['lastMinId'] = ObjectSerializer.serialize(lastMinId, "string");
        }

        if (pageSize !== undefined) {
            localVarQueryParameters['pageSize'] = ObjectSerializer.serialize(pageSize, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.ACCESS_KEY.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.ACCESS_KEY.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.ACCESS_PASSPHRASE.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.ACCESS_PASSPHRASE.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.ACCESS_SIGN.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.ACCESS_SIGN.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.ACCESS_TIMESTAMP.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.ACCESS_TIMESTAMP.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.SECRET_KEY.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.SECRET_KEY.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ApiResponseResultOfMerchantInfoResult;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "ApiResponseResultOfMerchantInfoResult");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * P2P merchant order info
     * @summary orderList
     * @param startTime startTime
     * @param endTime endTime
     * @param status status
     * @param type type
     * @param advNo advNo
     * @param orderNo orderNo
     * @param coin coin
     * @param languageType languageType
     * @param fiat fiat
     * @param lastMinId languageType
     * @param pageSize pageSize
     */
    public async merchantOrderList (startTime: string, endTime?: string, status?: string, type?: string, advNo?: string, orderNo?: string, coin?: string, languageType?: string, fiat?: string, lastMinId?: string, pageSize?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ApiResponseResultOfMerchantOrderResult;  }> {
        const localVarPath = this.basePath + '/api/p2p/v1/merchant/orderList';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'startTime' is not null or undefined
        if (startTime === null || startTime === undefined) {
            throw new Error('Required parameter startTime was null or undefined when calling merchantOrderList.');
        }

        if (startTime !== undefined) {
            localVarQueryParameters['startTime'] = ObjectSerializer.serialize(startTime, "string");
        }

        if (endTime !== undefined) {
            localVarQueryParameters['endTime'] = ObjectSerializer.serialize(endTime, "string");
        }

        if (status !== undefined) {
            localVarQueryParameters['status'] = ObjectSerializer.serialize(status, "string");
        }

        if (type !== undefined) {
            localVarQueryParameters['type'] = ObjectSerializer.serialize(type, "string");
        }

        if (advNo !== undefined) {
            localVarQueryParameters['advNo'] = ObjectSerializer.serialize(advNo, "string");
        }

        if (orderNo !== undefined) {
            localVarQueryParameters['orderNo'] = ObjectSerializer.serialize(orderNo, "string");
        }

        if (coin !== undefined) {
            localVarQueryParameters['coin'] = ObjectSerializer.serialize(coin, "string");
        }

        if (languageType !== undefined) {
            localVarQueryParameters['languageType'] = ObjectSerializer.serialize(languageType, "string");
        }

        if (fiat !== undefined) {
            localVarQueryParameters['fiat'] = ObjectSerializer.serialize(fiat, "string");
        }

        if (lastMinId !== undefined) {
            localVarQueryParameters['lastMinId'] = ObjectSerializer.serialize(lastMinId, "string");
        }

        if (pageSize !== undefined) {
            localVarQueryParameters['pageSize'] = ObjectSerializer.serialize(pageSize, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.ACCESS_KEY.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.ACCESS_KEY.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.ACCESS_PASSPHRASE.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.ACCESS_PASSPHRASE.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.ACCESS_SIGN.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.ACCESS_SIGN.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.ACCESS_TIMESTAMP.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.ACCESS_TIMESTAMP.applyToRequest(localVarRequestOptions));
        }
        if (this.authentications.SECRET_KEY.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.SECRET_KEY.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ApiResponseResultOfMerchantOrderResult;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "ApiResponseResultOfMerchantOrderResult");
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
