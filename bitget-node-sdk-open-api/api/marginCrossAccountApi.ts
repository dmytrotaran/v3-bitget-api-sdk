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
import { ApiResponseResultOfListOfMarginCrossAssetsPopulationResult } from '../model/apiResponseResultOfListOfMarginCrossAssetsPopulationResult';
import { ApiResponseResultOfMarginCrossAssetsResult } from '../model/apiResponseResultOfMarginCrossAssetsResult';
import { ApiResponseResultOfMarginCrossAssetsRiskResult } from '../model/apiResponseResultOfMarginCrossAssetsRiskResult';
import { ApiResponseResultOfMarginCrossBorrowLimitResult } from '../model/apiResponseResultOfMarginCrossBorrowLimitResult';
import { ApiResponseResultOfMarginCrossMaxBorrowResult } from '../model/apiResponseResultOfMarginCrossMaxBorrowResult';
import { ApiResponseResultOfMarginCrossRepayResult } from '../model/apiResponseResultOfMarginCrossRepayResult';
import { ApiResponseResultOfVoid } from '../model/apiResponseResultOfVoid';
import { MarginCrossLimitRequest } from '../model/marginCrossLimitRequest';
import { MarginCrossMaxBorrowRequest } from '../model/marginCrossMaxBorrowRequest';
import { MarginCrossRepayRequest } from '../model/marginCrossRepayRequest';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.bitget.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum MarginCrossAccountApiApiKeys {
    ACCESS_KEY,
    ACCESS_PASSPHRASE,
    ACCESS_SIGN,
    ACCESS_TIMESTAMP,
    SECRET_KEY,
}

export class MarginCrossAccountApi {
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

    public setApiKey(key: MarginCrossAccountApiApiKeys, value: string) {
        (this.authentications as any)[MarginCrossAccountApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * empty
     * @summary void
     */
    public async _void (options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ApiResponseResultOfVoid;  }> {
        const localVarPath = this.basePath + '/api/margin/v1/cross/account/void';
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
            return new Promise<{ response: http.IncomingMessage; body: ApiResponseResultOfVoid;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "ApiResponseResultOfVoid");
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
     * Get Assets
     * @summary assets
     * @param coin coin
     */
    public async marginCrossAccountAssets (coin: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ApiResponseResultOfListOfMarginCrossAssetsPopulationResult;  }> {
        const localVarPath = this.basePath + '/api/margin/v1/cross/account/assets';
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

        // verify required parameter 'coin' is not null or undefined
        if (coin === null || coin === undefined) {
            throw new Error('Required parameter coin was null or undefined when calling marginCrossAccountAssets.');
        }

        if (coin !== undefined) {
            localVarQueryParameters['coin'] = ObjectSerializer.serialize(coin, "string");
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
            return new Promise<{ response: http.IncomingMessage; body: ApiResponseResultOfListOfMarginCrossAssetsPopulationResult;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "ApiResponseResultOfListOfMarginCrossAssetsPopulationResult");
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
     * borrow
     * @summary borrow
     * @param marginCrossLimitRequest marginCrossLimitRequest
     */
    public async marginCrossAccountBorrow (marginCrossLimitRequest: MarginCrossLimitRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ApiResponseResultOfMarginCrossBorrowLimitResult;  }> {
        const localVarPath = this.basePath + '/api/margin/v1/cross/account/borrow';
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

        // verify required parameter 'marginCrossLimitRequest' is not null or undefined
        if (marginCrossLimitRequest === null || marginCrossLimitRequest === undefined) {
            throw new Error('Required parameter marginCrossLimitRequest was null or undefined when calling marginCrossAccountBorrow.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(marginCrossLimitRequest, "MarginCrossLimitRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: ApiResponseResultOfMarginCrossBorrowLimitResult;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "ApiResponseResultOfMarginCrossBorrowLimitResult");
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
     * Get MaxBorrowableAmount
     * @summary maxBorrowableAmount
     * @param marginCrossMaxBorrowRequest marginCrossMaxBorrowRequest
     */
    public async marginCrossAccountMaxBorrowableAmount (marginCrossMaxBorrowRequest: MarginCrossMaxBorrowRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ApiResponseResultOfMarginCrossMaxBorrowResult;  }> {
        const localVarPath = this.basePath + '/api/margin/v1/cross/account/maxBorrowableAmount';
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

        // verify required parameter 'marginCrossMaxBorrowRequest' is not null or undefined
        if (marginCrossMaxBorrowRequest === null || marginCrossMaxBorrowRequest === undefined) {
            throw new Error('Required parameter marginCrossMaxBorrowRequest was null or undefined when calling marginCrossAccountMaxBorrowableAmount.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(marginCrossMaxBorrowRequest, "MarginCrossMaxBorrowRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: ApiResponseResultOfMarginCrossMaxBorrowResult;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "ApiResponseResultOfMarginCrossMaxBorrowResult");
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
     * Get Max TransferOutAmount
     * @summary maxTransferOutAmount
     * @param coin coin
     */
    public async marginCrossAccountMaxTransferOutAmount (coin: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ApiResponseResultOfMarginCrossAssetsResult;  }> {
        const localVarPath = this.basePath + '/api/margin/v1/cross/account/maxTransferOutAmount';
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

        // verify required parameter 'coin' is not null or undefined
        if (coin === null || coin === undefined) {
            throw new Error('Required parameter coin was null or undefined when calling marginCrossAccountMaxTransferOutAmount.');
        }

        if (coin !== undefined) {
            localVarQueryParameters['coin'] = ObjectSerializer.serialize(coin, "string");
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
            return new Promise<{ response: http.IncomingMessage; body: ApiResponseResultOfMarginCrossAssetsResult;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "ApiResponseResultOfMarginCrossAssetsResult");
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
     * repay
     * @summary repay
     * @param marginCrossRepayRequest marginCrossRepayRequest
     */
    public async marginCrossAccountRepay (marginCrossRepayRequest: MarginCrossRepayRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ApiResponseResultOfMarginCrossRepayResult;  }> {
        const localVarPath = this.basePath + '/api/margin/v1/cross/account/repay';
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

        // verify required parameter 'marginCrossRepayRequest' is not null or undefined
        if (marginCrossRepayRequest === null || marginCrossRepayRequest === undefined) {
            throw new Error('Required parameter marginCrossRepayRequest was null or undefined when calling marginCrossAccountRepay.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(marginCrossRepayRequest, "MarginCrossRepayRequest")
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
            return new Promise<{ response: http.IncomingMessage; body: ApiResponseResultOfMarginCrossRepayResult;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "ApiResponseResultOfMarginCrossRepayResult");
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
     * riskRate
     * @summary riskRate
     */
    public async marginCrossAccountRiskRate (options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ApiResponseResultOfMarginCrossAssetsRiskResult;  }> {
        const localVarPath = this.basePath + '/api/margin/v1/cross/account/riskRate';
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
            return new Promise<{ response: http.IncomingMessage; body: ApiResponseResultOfMarginCrossAssetsRiskResult;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            body = ObjectSerializer.deserialize(body, "ApiResponseResultOfMarginCrossAssetsRiskResult");
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
