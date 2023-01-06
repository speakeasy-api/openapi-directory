package operations

import (
	"openapi/pkg/models/shared"
)

type ChangeMainCompanyNumberApplicationJSON struct {
	PhoneNumber *string `json:"phone_number,omitempty"`
}

type ChangeMainCompanyNumberMultipartFormData struct {
	PhoneNumber *string `multipartForm:"name=phone_number"`
}

type ChangeMainCompanyNumberRequests struct {
	Object  *ChangeMainCompanyNumberApplicationJSON   `request:"mediaType=application/json"`
	Object1 *ChangeMainCompanyNumberMultipartFormData `request:"mediaType=multipart/form-data"`
}

type ChangeMainCompanyNumberSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ChangeMainCompanyNumberRequest struct {
	Request  *ChangeMainCompanyNumberRequests
	Security ChangeMainCompanyNumberSecurity
}

type ChangeMainCompanyNumberResponse struct {
	Body                                         []byte
	ContentType                                  string
	StatusCode                                   int64
	ChangeMainCompanyNumber204ApplicationJSONAny *interface{}
}
