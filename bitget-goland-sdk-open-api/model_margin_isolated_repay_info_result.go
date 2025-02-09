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

// MarginIsolatedRepayInfoResult struct for MarginIsolatedRepayInfoResult
type MarginIsolatedRepayInfoResult struct {
	MaxId                *string                   `json:"maxId,omitempty"`
	MinId                *string                   `json:"minId,omitempty"`
	ResultList           []MarginIsolatedRepayInfo `json:"resultList,omitempty"`
	AdditionalProperties map[string]interface{}
}

type _MarginIsolatedRepayInfoResult MarginIsolatedRepayInfoResult

// NewMarginIsolatedRepayInfoResult instantiates a new MarginIsolatedRepayInfoResult object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMarginIsolatedRepayInfoResult() *MarginIsolatedRepayInfoResult {
	this := MarginIsolatedRepayInfoResult{}
	return &this
}

// NewMarginIsolatedRepayInfoResultWithDefaults instantiates a new MarginIsolatedRepayInfoResult object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMarginIsolatedRepayInfoResultWithDefaults() *MarginIsolatedRepayInfoResult {
	this := MarginIsolatedRepayInfoResult{}
	return &this
}

// GetMaxId returns the MaxId field value if set, zero value otherwise.
func (o *MarginIsolatedRepayInfoResult) GetMaxId() string {
	if o == nil || isNil(o.MaxId) {
		var ret string
		return ret
	}
	return *o.MaxId
}

// GetMaxIdOk returns a tuple with the MaxId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarginIsolatedRepayInfoResult) GetMaxIdOk() (*string, bool) {
	if o == nil || isNil(o.MaxId) {
		return nil, false
	}
	return o.MaxId, true
}

// HasMaxId returns a boolean if a field has been set.
func (o *MarginIsolatedRepayInfoResult) HasMaxId() bool {
	if o != nil && !isNil(o.MaxId) {
		return true
	}

	return false
}

// SetMaxId gets a reference to the given string and assigns it to the MaxId field.
func (o *MarginIsolatedRepayInfoResult) SetMaxId(v string) {
	o.MaxId = &v
}

// GetMinId returns the MinId field value if set, zero value otherwise.
func (o *MarginIsolatedRepayInfoResult) GetMinId() string {
	if o == nil || isNil(o.MinId) {
		var ret string
		return ret
	}
	return *o.MinId
}

// GetMinIdOk returns a tuple with the MinId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarginIsolatedRepayInfoResult) GetMinIdOk() (*string, bool) {
	if o == nil || isNil(o.MinId) {
		return nil, false
	}
	return o.MinId, true
}

// HasMinId returns a boolean if a field has been set.
func (o *MarginIsolatedRepayInfoResult) HasMinId() bool {
	if o != nil && !isNil(o.MinId) {
		return true
	}

	return false
}

// SetMinId gets a reference to the given string and assigns it to the MinId field.
func (o *MarginIsolatedRepayInfoResult) SetMinId(v string) {
	o.MinId = &v
}

// GetResultList returns the ResultList field value if set, zero value otherwise.
func (o *MarginIsolatedRepayInfoResult) GetResultList() []MarginIsolatedRepayInfo {
	if o == nil || isNil(o.ResultList) {
		var ret []MarginIsolatedRepayInfo
		return ret
	}
	return o.ResultList
}

// GetResultListOk returns a tuple with the ResultList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MarginIsolatedRepayInfoResult) GetResultListOk() ([]MarginIsolatedRepayInfo, bool) {
	if o == nil || isNil(o.ResultList) {
		return nil, false
	}
	return o.ResultList, true
}

// HasResultList returns a boolean if a field has been set.
func (o *MarginIsolatedRepayInfoResult) HasResultList() bool {
	if o != nil && !isNil(o.ResultList) {
		return true
	}

	return false
}

// SetResultList gets a reference to the given []MarginIsolatedRepayInfo and assigns it to the ResultList field.
func (o *MarginIsolatedRepayInfoResult) SetResultList(v []MarginIsolatedRepayInfo) {
	o.ResultList = v
}

func (o MarginIsolatedRepayInfoResult) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if !isNil(o.MaxId) {
		toSerialize["maxId"] = o.MaxId
	}
	if !isNil(o.MinId) {
		toSerialize["minId"] = o.MinId
	}
	if !isNil(o.ResultList) {
		toSerialize["resultList"] = o.ResultList
	}

	for key, value := range o.AdditionalProperties {
		toSerialize[key] = value
	}

	return json.Marshal(toSerialize)
}

func (o *MarginIsolatedRepayInfoResult) UnmarshalJSON(bytes []byte) (err error) {
	varMarginIsolatedRepayInfoResult := _MarginIsolatedRepayInfoResult{}

	if err = json.Unmarshal(bytes, &varMarginIsolatedRepayInfoResult); err == nil {
		*o = MarginIsolatedRepayInfoResult(varMarginIsolatedRepayInfoResult)
	}

	additionalProperties := make(map[string]interface{})

	if err = json.Unmarshal(bytes, &additionalProperties); err == nil {
		delete(additionalProperties, "maxId")
		delete(additionalProperties, "minId")
		delete(additionalProperties, "resultList")
		o.AdditionalProperties = additionalProperties
	}

	return err
}

type NullableMarginIsolatedRepayInfoResult struct {
	value *MarginIsolatedRepayInfoResult
	isSet bool
}

func (v NullableMarginIsolatedRepayInfoResult) Get() *MarginIsolatedRepayInfoResult {
	return v.value
}

func (v *NullableMarginIsolatedRepayInfoResult) Set(val *MarginIsolatedRepayInfoResult) {
	v.value = val
	v.isSet = true
}

func (v NullableMarginIsolatedRepayInfoResult) IsSet() bool {
	return v.isSet
}

func (v *NullableMarginIsolatedRepayInfoResult) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMarginIsolatedRepayInfoResult(val *MarginIsolatedRepayInfoResult) *NullableMarginIsolatedRepayInfoResult {
	return &NullableMarginIsolatedRepayInfoResult{value: val, isSet: true}
}

func (v NullableMarginIsolatedRepayInfoResult) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMarginIsolatedRepayInfoResult) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
