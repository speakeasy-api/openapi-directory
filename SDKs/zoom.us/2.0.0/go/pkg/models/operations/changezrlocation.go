package operations

import (
	"openapi/pkg/models/shared"
)

type ChangeZrLocationPathParams struct {
	RoomID string `pathParam:"style=simple,explode=false,name=roomId"`
}

type ChangeZrLocationApplicationJSON struct {
	LocationID *string `json:"location_id,omitempty"`
}

type ChangeZrLocationMultipartFormData struct {
	LocationID *string `multipartForm:"name=location_id"`
}

type ChangeZrLocationRequests struct {
	Object  *ChangeZrLocationApplicationJSON   `request:"mediaType=application/json"`
	Object1 *ChangeZrLocationMultipartFormData `request:"mediaType=multipart/form-data"`
}

type ChangeZrLocationSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ChangeZrLocationRequest struct {
	PathParams ChangeZrLocationPathParams
	Request    *ChangeZrLocationRequests
	Security   ChangeZrLocationSecurity
}

type ChangeZrLocationResponse struct {
	Body                                  []byte
	ContentType                           string
	StatusCode                            int64
	ChangeZRLocation204ApplicationJSONAny *interface{}
}
