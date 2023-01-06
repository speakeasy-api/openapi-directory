package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePhoneNumberDetailsPathParams struct {
	NumberID string `pathParam:"style=simple,explode=false,name=numberId"`
}

type UpdatePhoneNumberDetailsApplicationJSON struct {
	Capability  []string `json:"capability,omitempty"`
	DisplayName *string  `json:"display_name,omitempty"`
}

type UpdatePhoneNumberDetailsMultipartFormData struct {
	Capability  []string `multipartForm:"name=capability,json"`
	DisplayName *string  `multipartForm:"name=display_name"`
}

type UpdatePhoneNumberDetailsRequests struct {
	Object  *UpdatePhoneNumberDetailsApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UpdatePhoneNumberDetailsMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UpdatePhoneNumberDetailsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UpdatePhoneNumberDetailsRequest struct {
	PathParams UpdatePhoneNumberDetailsPathParams
	Request    *UpdatePhoneNumberDetailsRequests
	Security   UpdatePhoneNumberDetailsSecurity
}

type UpdatePhoneNumberDetailsResponse struct {
	Body                                          []byte
	ContentType                                   string
	StatusCode                                    int64
	UpdatePhoneNumberDetails204ApplicationJSONAny *interface{}
}
