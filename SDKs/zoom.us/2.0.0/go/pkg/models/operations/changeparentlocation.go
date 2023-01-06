package operations

import (
	"openapi/pkg/models/shared"
)

type ChangeParentLocationPathParams struct {
	LocationID string `pathParam:"style=simple,explode=false,name=locationId"`
}

type ChangeParentLocationApplicationJSON struct {
	ParentLocationID *string `json:"parent_location_id,omitempty"`
}

type ChangeParentLocationMultipartFormData struct {
	ParentLocationID *string `multipartForm:"name=parent_location_id"`
}

type ChangeParentLocationRequests struct {
	Object  *ChangeParentLocationApplicationJSON   `request:"mediaType=application/json"`
	Object1 *ChangeParentLocationMultipartFormData `request:"mediaType=multipart/form-data"`
}

type ChangeParentLocationSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ChangeParentLocationRequest struct {
	PathParams ChangeParentLocationPathParams
	Request    *ChangeParentLocationRequests
	Security   ChangeParentLocationSecurity
}

type ChangeParentLocationResponse struct {
	Body                                      []byte
	ContentType                               string
	StatusCode                                int64
	ChangeParentLocation204ApplicationJSONAny *interface{}
}
