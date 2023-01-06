package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePhoneSipTrunkPathParams struct {
	AccountID  string `pathParam:"style=simple,explode=false,name=accountId"`
	SipTrunkID string `pathParam:"style=simple,explode=false,name=sipTrunkId"`
}

type UpdatePhoneSipTrunkApplicationJSON struct {
	CarrierAccount *string `json:"carrier_account,omitempty"`
	Name           *string `json:"name,omitempty"`
}

type UpdatePhoneSipTrunkMultipartFormData struct {
	CarrierAccount *string `multipartForm:"name=carrier_account"`
	Name           *string `multipartForm:"name=name"`
}

type UpdatePhoneSipTrunkRequests struct {
	Object  *UpdatePhoneSipTrunkApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UpdatePhoneSipTrunkMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UpdatePhoneSipTrunkSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UpdatePhoneSipTrunkRequest struct {
	PathParams UpdatePhoneSipTrunkPathParams
	Request    *UpdatePhoneSipTrunkRequests
	Security   UpdatePhoneSipTrunkSecurity
}

type UpdatePhoneSipTrunkResponse struct {
	Body                                     []byte
	ContentType                              string
	StatusCode                               int64
	UpdatePhoneSIPTrunk204ApplicationJSONAny *interface{}
}
