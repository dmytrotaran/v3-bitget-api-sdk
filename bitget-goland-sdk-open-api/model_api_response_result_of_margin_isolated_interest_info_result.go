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

// ApiResponseResultOfMarginIsolatedInterestInfoResult struct for ApiResponseResultOfMarginIsolatedInterestInfoResult
type ApiResponseResultOfMarginIsolatedInterestInfoResult struct {
	// code
	Code *string                           `json:"code,omitempty"`
	Data *MarginIsolatedInterestInfoResult `json:"data,omitempty"`
	// msg
	Msg *string `json:"msg,omitempty"`
	// requestTime
	RequestTime          *int64 `json:"requestTime,omitempty"`
	AdditionalProperties map[string]interface{}
}

type _ApiResponseResultOfMarginIsolatedInterestInfoResult ApiResponseResultOfMarginIsolatedInterestInfoResult

// NewApiResponseResultOfMarginIsolatedInterestInfoResult instantiates a new ApiResponseResultOfMarginIsolatedInterestInfoResult object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewApiResponseResultOfMarginIsolatedInterestInfoResult() *ApiResponseResultOfMarginIsolatedInterestInfoResult {
	this := ApiResponseResultOfMarginIsolatedInterestInfoResult{}
	return &this
}

// NewApiResponseResultOfMarginIsolatedInterestInfoResultWithDefaults instantiates a new ApiResponseResultOfMarginIsolatedInterestInfoResult object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewApiResponseResultOfMarginIsolatedInterestInfoResultWithDefaults() *ApiResponseResultOfMarginIsolatedInterestInfoResult {
	this := ApiResponseResultOfMarginIsolatedInterestInfoResult{}
	return &this
}

// GetCode returns the Code field value if set, zero value otherwise.
func (o *ApiResponseResultOfMarginIsolatedInterestInfoResult) GetCode() string {
	if o == nil || isNil(o.Code) {
		var ret string
		return ret
	}
	return *o.Code
}

// GetCodeOk returns a tuple with the Code field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApiResponseResultOfMarginIsolatedInterestInfoResult) GetCodeOk() (*string, bool) {
	if o == nil || isNil(o.Code) {
		return nil, false
	}
	return o.Code, true
}

// HasCode returns a boolean if a field has been set.
func (o *ApiResponseResultOfMarginIsolatedInterestInfoResult) HasCode() bool {
	if o != nil && !isNil(o.Code) {
		return true
	}

	return false
}

// SetCode gets a reference to the given string and assigns it to the Code field.
func (o *ApiResponseResultOfMarginIsolatedInterestInfoResult) SetCode(v string) {
	o.Code = &v
}

// GetData returns the Data field value if set, zero value otherwise.
func (o *ApiResponseResultOfMarginIsolatedInterestInfoResult) GetData() MarginIsolatedInterestInfoResult {
	if o == nil || isNil(o.Data) {
		var ret MarginIsolatedInterestInfoResult
		return ret
	}
	return *o.Data
}

// GetDataOk returns a tuple with the Data field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApiResponseResultOfMarginIsolatedInterestInfoResult) GetDataOk() (*MarginIsolatedInterestInfoResult, bool) {
	if o == nil || isNil(o.Data) {
		return nil, false
	}
	return o.Data, true
}

// HasData returns a boolean if a field has been set.
func (o *ApiResponseResultOfMarginIsolatedInterestInfoResult) HasData() bool {
	if o != nil && !isNil(o.Data) {
		return true
	}

	return false
}

// SetData gets a reference to the given MarginIsolatedInterestInfoResult and assigns it to the Data field.
func (o *ApiResponseResultOfMarginIsolatedInterestInfoResult) SetData(v MarginIsolatedInterestInfoResult) {
	o.Data = &v
}

// GetMsg returns the Msg field value if set, zero value otherwise.
func (o *ApiResponseResultOfMarginIsolatedInterestInfoResult) GetMsg() string {
	if o == nil || isNil(o.Msg) {
		var ret string
		return ret
	}
	return *o.Msg
}

// GetMsgOk returns a tuple with the Msg field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApiResponseResultOfMarginIsolatedInterestInfoResult) GetMsgOk() (*string, bool) {
	if o == nil || isNil(o.Msg) {
		return nil, false
	}
	return o.Msg, true
}

// HasMsg returns a boolean if a field has been set.
func (o *ApiResponseResultOfMarginIsolatedInterestInfoResult) HasMsg() bool {
	if o != nil && !isNil(o.Msg) {
		return true
	}

	return false
}

// SetMsg gets a reference to the given string and assigns it to the Msg field.
func (o *ApiResponseResultOfMarginIsolatedInterestInfoResult) SetMsg(v string) {
	o.Msg = &v
}

// GetRequestTime returns the RequestTime field value if set, zero value otherwise.
func (o *ApiResponseResultOfMarginIsolatedInterestInfoResult) GetRequestTime() int64 {
	if o == nil || isNil(o.RequestTime) {
		var ret int64
		return ret
	}
	return *o.RequestTime
}

// GetRequestTimeOk returns a tuple with the RequestTime field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ApiResponseResultOfMarginIsolatedInterestInfoResult) GetRequestTimeOk() (*int64, bool) {
	if o == nil || isNil(o.RequestTime) {
		return nil, false
	}
	return o.RequestTime, true
}

// HasRequestTime returns a boolean if a field has been set.
func (o *ApiResponseResultOfMarginIsolatedInterestInfoResult) HasRequestTime() bool {
	if o != nil && !isNil(o.RequestTime) {
		return true
	}

	return false
}

// SetRequestTime gets a reference to the given int64 and assigns it to the RequestTime field.
func (o *ApiResponseResultOfMarginIsolatedInterestInfoResult) SetRequestTime(v int64) {
	o.RequestTime = &v
}

func (o ApiResponseResultOfMarginIsolatedInterestInfoResult) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if !isNil(o.Code) {
		toSerialize["code"] = o.Code
	}
	if !isNil(o.Data) {
		toSerialize["data"] = o.Data
	}
	if !isNil(o.Msg) {
		toSerialize["msg"] = o.Msg
	}
	if !isNil(o.RequestTime) {
		toSerialize["requestTime"] = o.RequestTime
	}

	for key, value := range o.AdditionalProperties {
		toSerialize[key] = value
	}

	return json.Marshal(toSerialize)
}

func (o *ApiResponseResultOfMarginIsolatedInterestInfoResult) UnmarshalJSON(bytes []byte) (err error) {
	varApiResponseResultOfMarginIsolatedInterestInfoResult := _ApiResponseResultOfMarginIsolatedInterestInfoResult{}

	if err = json.Unmarshal(bytes, &varApiResponseResultOfMarginIsolatedInterestInfoResult); err == nil {
		*o = ApiResponseResultOfMarginIsolatedInterestInfoResult(varApiResponseResultOfMarginIsolatedInterestInfoResult)
	}

	additionalProperties := make(map[string]interface{})

	if err = json.Unmarshal(bytes, &additionalProperties); err == nil {
		delete(additionalProperties, "code")
		delete(additionalProperties, "data")
		delete(additionalProperties, "msg")
		delete(additionalProperties, "requestTime")
		o.AdditionalProperties = additionalProperties
	}

	return err
}

type NullableApiResponseResultOfMarginIsolatedInterestInfoResult struct {
	value *ApiResponseResultOfMarginIsolatedInterestInfoResult
	isSet bool
}

func (v NullableApiResponseResultOfMarginIsolatedInterestInfoResult) Get() *ApiResponseResultOfMarginIsolatedInterestInfoResult {
	return v.value
}

func (v *NullableApiResponseResultOfMarginIsolatedInterestInfoResult) Set(val *ApiResponseResultOfMarginIsolatedInterestInfoResult) {
	v.value = val
	v.isSet = true
}

func (v NullableApiResponseResultOfMarginIsolatedInterestInfoResult) IsSet() bool {
	return v.isSet
}

func (v *NullableApiResponseResultOfMarginIsolatedInterestInfoResult) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableApiResponseResultOfMarginIsolatedInterestInfoResult(val *ApiResponseResultOfMarginIsolatedInterestInfoResult) *NullableApiResponseResultOfMarginIsolatedInterestInfoResult {
	return &NullableApiResponseResultOfMarginIsolatedInterestInfoResult{value: val, isSet: true}
}

func (v NullableApiResponseResultOfMarginIsolatedInterestInfoResult) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableApiResponseResultOfMarginIsolatedInterestInfoResult) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
