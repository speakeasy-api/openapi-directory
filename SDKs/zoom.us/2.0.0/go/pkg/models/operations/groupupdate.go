package operations

import (
	"openapi/pkg/models/shared"
)

type GroupUpdatePathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
}

type GroupUpdateApplicationJSON struct {
	Name *string `json:"name,omitempty"`
}

type GroupUpdateMultipartFormData struct {
	Name *string `multipartForm:"name=name"`
}

type GroupUpdateRequests struct {
	Object  *GroupUpdateApplicationJSON   `request:"mediaType=application/json"`
	Object1 *GroupUpdateMultipartFormData `request:"mediaType=multipart/form-data"`
}

type GroupUpdateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GroupUpdateRequest struct {
	PathParams GroupUpdatePathParams
	Request    GroupUpdateRequests
	Security   GroupUpdateSecurity
}

type GroupUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
