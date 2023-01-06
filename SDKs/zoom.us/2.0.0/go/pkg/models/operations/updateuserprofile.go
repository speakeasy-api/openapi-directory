package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserProfilePathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type UpdateUserProfileApplicationJSON struct {
	ExtensionNumber *string `json:"extension_number,omitempty"`
	SiteID          *string `json:"site_id,omitempty"`
}

type UpdateUserProfileMultipartFormData struct {
	ExtensionNumber *string `multipartForm:"name=extension_number"`
	SiteID          *string `multipartForm:"name=site_id"`
}

type UpdateUserProfileRequests struct {
	Object  *UpdateUserProfileApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UpdateUserProfileMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UpdateUserProfileSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UpdateUserProfileRequest struct {
	PathParams UpdateUserProfilePathParams
	Request    *UpdateUserProfileRequests
	Security   UpdateUserProfileSecurity
}

type UpdateUserProfileResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	UpdateUserProfile204ApplicationJSONAny *interface{}
}
