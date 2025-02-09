/*
Bitget Open API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

API version: 2.0.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// MarginCancelOrderRequest struct for MarginCancelOrderRequest
type MarginCancelOrderRequest struct {
	// clientOid
	ClientOid *string `json:"clientOid,omitempty"`
	// orderId
	OrderId *string `json:"orderId,omitempty"`
	// symbol
	Symbol               string `json:"symbol"`
	AdditionalProperties map[string]interface{}
}

type _MarginCancelOrderRequest MarginCancelOrderRequest

// NewMarginCancelOrderRequest instantiates a new MarginCancelOrderRequest object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMarginCancelOrderRequest(symbol string) *MarginCancelOrderRequest {
	this := MarginCancelOrderRequest{}
	this.Symbol = symbol
	return &this
}

// NewMarginCancelOrderRequestWithDefaults instantiates a new MarginCancelOrderRequest object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMarginCancelOrderRequestWithDefaults() *MarginCancelOrderRequest {
	this := MarginCancelOrderRequest{}
	return &this
}

// GetClientOid returns the ClientOid field value if set, zero value otherwise.
func (o *MarginCancelOrderRequest) GetClientOid() string {
	if o == nil || isNil(o.ClientOid) {
		var ret string
		return ret
	}
	return *o.ClientOid
}

// GetClientOidOk returns a tuple with the ClientOid field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarginCancelOrderRequest) GetClientOidOk() (*string, bool) {
	if o == nil || isNil(o.ClientOid) {
		return nil, false
	}
	return o.ClientOid, true
}

// HasClientOid returns a boolean if a field has been set.
func (o *MarginCancelOrderRequest) HasClientOid() bool {
	if o != nil && !isNil(o.ClientOid) {
		return true
	}

	return false
}

// SetClientOid gets a reference to the given string and assigns it to the ClientOid field.
func (o *MarginCancelOrderRequest) SetClientOid(v string) {
	o.ClientOid = &v
}

// GetOrderId returns the OrderId field value if set, zero value otherwise.
func (o *MarginCancelOrderRequest) GetOrderId() string {
	if o == nil || isNil(o.OrderId) {
		var ret string
		return ret
	}
	return *o.OrderId
}

// GetOrderIdOk returns a tuple with the OrderId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarginCancelOrderRequest) GetOrderIdOk() (*string, bool) {
	if o == nil || isNil(o.OrderId) {
		return nil, false
	}
	return o.OrderId, true
}

// HasOrderId returns a boolean if a field has been set.
func (o *MarginCancelOrderRequest) HasOrderId() bool {
	if o != nil && !isNil(o.OrderId) {
		return true
	}

	return false
}

// SetOrderId gets a reference to the given string and assigns it to the OrderId field.
func (o *MarginCancelOrderRequest) SetOrderId(v string) {
	o.OrderId = &v
}

// GetSymbol returns the Symbol field value
func (o *MarginCancelOrderRequest) GetSymbol() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Symbol
}

// GetSymbolOk returns a tuple with the Symbol field value
// and a boolean to check if the value has been set.
func (o *MarginCancelOrderRequest) GetSymbolOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Symbol, true
}

// SetSymbol sets field value
func (o *MarginCancelOrderRequest) SetSymbol(v string) {
	o.Symbol = v
}

func (o MarginCancelOrderRequest) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if !isNil(o.ClientOid) {
		toSerialize["clientOid"] = o.ClientOid
	}
	if !isNil(o.OrderId) {
		toSerialize["orderId"] = o.OrderId
	}
	if true {
		toSerialize["symbol"] = o.Symbol
	}

	for key, value := range o.AdditionalProperties {
		toSerialize[key] = value
	}

	return json.Marshal(toSerialize)
}

func (o *MarginCancelOrderRequest) UnmarshalJSON(bytes []byte) (err error) {
	varMarginCancelOrderRequest := _MarginCancelOrderRequest{}

	if err = json.Unmarshal(bytes, &varMarginCancelOrderRequest); err == nil {
		*o = MarginCancelOrderRequest(varMarginCancelOrderRequest)
	}

	additionalProperties := make(map[string]interface{})

	if err = json.Unmarshal(bytes, &additionalProperties); err == nil {
		delete(additionalProperties, "clientOid")
		delete(additionalProperties, "orderId")
		delete(additionalProperties, "symbol")
		o.AdditionalProperties = additionalProperties
	}

	return err
}

type NullableMarginCancelOrderRequest struct {
	value *MarginCancelOrderRequest
	isSet bool
}

func (v NullableMarginCancelOrderRequest) Get() *MarginCancelOrderRequest {
	return v.value
}

func (v *NullableMarginCancelOrderRequest) Set(val *MarginCancelOrderRequest) {
	v.value = val
	v.isSet = true
}

func (v NullableMarginCancelOrderRequest) IsSet() bool {
	return v.isSet
}

func (v *NullableMarginCancelOrderRequest) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMarginCancelOrderRequest(val *MarginCancelOrderRequest) *NullableMarginCancelOrderRequest {
	return &NullableMarginCancelOrderRequest{value: val, isSet: true}
}

func (v NullableMarginCancelOrderRequest) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMarginCancelOrderRequest) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
