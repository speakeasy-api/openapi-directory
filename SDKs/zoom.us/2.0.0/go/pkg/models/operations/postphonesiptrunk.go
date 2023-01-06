package operations

import (
	"openapi/pkg/models/shared"
)

type PostPhoneSipTrunkPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type PostPhoneSipTrunkApplicationJSONSipTrunks struct {
	CarrierAccount *string `json:"carrier_account,omitempty"`
	ID             *string `json:"id,omitempty"`
	Name           *string `json:"name,omitempty"`
}

type PostPhoneSipTrunkApplicationJSON struct {
	SipTrunks []PostPhoneSipTrunkApplicationJSONSipTrunks `json:"sip_trunks,omitempty"`
}

type PostPhoneSipTrunkMultipartFormDataSipTrunks struct {
	CarrierAccount *string `json:"carrier_account,omitempty"`
	ID             *string `json:"id,omitempty"`
	Name           *string `json:"name,omitempty"`
}

type PostPhoneSipTrunkMultipartFormData1 struct {
	SipTrunks []PostPhoneSipTrunkMultipartFormDataSipTrunks `multipartForm:"name=sip_trunks,json"`
}

type PostPhoneSipTrunkRequests struct {
	Object  *PostPhoneSipTrunkApplicationJSON    `request:"mediaType=application/json"`
	Object1 *PostPhoneSipTrunkMultipartFormData1 `request:"mediaType=multipart/form-data"`
}

type PostPhoneSipTrunkSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type PostPhoneSipTrunk201ApplicationJSONSipTrunks struct {
	CarrierAccount *string `json:"carrier_account,omitempty"`
	ID             *string `json:"id,omitempty"`
	Name           *string `json:"name,omitempty"`
}

type PostPhoneSipTrunk201ApplicationJSON struct {
	SipTrunks []PostPhoneSipTrunk201ApplicationJSONSipTrunks `json:"sip_trunks,omitempty"`
}

type PostPhoneSipTrunkRequest struct {
	PathParams PostPhoneSipTrunkPathParams
	Request    *PostPhoneSipTrunkRequests
	Security   PostPhoneSipTrunkSecurity
}

type PostPhoneSipTrunkResponse struct {
	Body                                      []byte
	ContentType                               string
	StatusCode                                int64
	PostPhoneSIPTrunk201ApplicationJSONObject *PostPhoneSipTrunk201ApplicationJSON
}
