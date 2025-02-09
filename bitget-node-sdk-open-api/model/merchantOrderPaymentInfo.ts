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

import { RequestFile } from './models';
import { OrderPaymentDetailInfo } from './orderPaymentDetailInfo';

export class MerchantOrderPaymentInfo {
    'paymethodId'?: string;
    'paymethodInfo'?: Array<OrderPaymentDetailInfo>;
    'paymethodName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "paymethodId",
            "baseName": "paymethodId",
            "type": "string"
        },
        {
            "name": "paymethodInfo",
            "baseName": "paymethodInfo",
            "type": "Array<OrderPaymentDetailInfo>"
        },
        {
            "name": "paymethodName",
            "baseName": "paymethodName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MerchantOrderPaymentInfo.attributeTypeMap;
    }
}

