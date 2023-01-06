package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAutoReceptionistPathParams struct {
	AutoReceptionistID string `pathParam:"style=simple,explode=false,name=autoReceptionistId"`
}

type UpdateAutoReceptionistApplicationJSON struct {
	ExtensionNumber *int64  `json:"extension_number,omitempty"`
	Name            *string `json:"name,omitempty"`
}

type UpdateAutoReceptionistMultipartFormData struct {
	ExtensionNumber *int64  `multipartForm:"name=extension_number"`
	Name            *string `multipartForm:"name=name"`
}

type UpdateAutoReceptionistRequests struct {
	Object  *UpdateAutoReceptionistApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UpdateAutoReceptionistMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UpdateAutoReceptionistSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UpdateAutoReceptionistRequest struct {
	PathParams UpdateAutoReceptionistPathParams
	Request    *UpdateAutoReceptionistRequests
	Security   UpdateAutoReceptionistSecurity
}

type UpdateAutoReceptionistResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	UpdateAutoReceptionist204ApplicationJSONAny *interface{}
}
