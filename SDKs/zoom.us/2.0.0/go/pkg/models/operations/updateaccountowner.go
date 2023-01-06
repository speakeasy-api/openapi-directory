package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAccountOwnerPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type UpdateAccountOwnerApplicationJSON struct {
	Email string `json:"email"`
}

type UpdateAccountOwnerMultipartFormData struct {
	Email string `multipartForm:"name=email"`
}

type UpdateAccountOwnerRequests struct {
	Object  *UpdateAccountOwnerApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UpdateAccountOwnerMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UpdateAccountOwnerSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UpdateAccountOwnerRequest struct {
	PathParams UpdateAccountOwnerPathParams
	Request    *UpdateAccountOwnerRequests
	Security   UpdateAccountOwnerSecurity
}

type UpdateAccountOwnerResponse struct {
	Body                                    []byte
	ContentType                             string
	StatusCode                              int64
	UpdateAccountOwner204ApplicationJSONAny *interface{}
}
