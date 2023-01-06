package operations

import (
	"openapi/pkg/models/shared"
)

type AssignSipTrunkNumbersPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type AssignSipTrunkNumbersApplicationJSON struct {
	PhoneNumbers []string `json:"phone_numbers,omitempty"`
}

type AssignSipTrunkNumbersMultipartFormData struct {
	PhoneNumbers []string `multipartForm:"name=phone_numbers,json"`
}

type AssignSipTrunkNumbersRequests struct {
	Object  *AssignSipTrunkNumbersApplicationJSON   `request:"mediaType=application/json"`
	Object1 *AssignSipTrunkNumbersMultipartFormData `request:"mediaType=multipart/form-data"`
}

type AssignSipTrunkNumbersSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type AssignSipTrunkNumbersRequest struct {
	PathParams AssignSipTrunkNumbersPathParams
	Request    *AssignSipTrunkNumbersRequests
	Security   AssignSipTrunkNumbersSecurity
}

type AssignSipTrunkNumbersResponse struct {
	Body                                       []byte
	ContentType                                string
	StatusCode                                 int64
	AssignSipTrunkNumbers201ApplicationJSONAny *interface{}
}
