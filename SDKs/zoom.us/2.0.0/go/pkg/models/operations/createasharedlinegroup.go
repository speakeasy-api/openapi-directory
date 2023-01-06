package operations

import (
	"openapi/pkg/models/shared"
)

type CreateASharedLineGroupApplicationJSON struct {
	Description     *string `json:"description,omitempty"`
	DisplayName     string  `json:"display_name"`
	ExtensionNumber *int64  `json:"extension_number,omitempty"`
	SiteID          *string `json:"site_id,omitempty"`
}

type CreateASharedLineGroupMultipartFormData struct {
	Description     *string `multipartForm:"name=description"`
	DisplayName     string  `multipartForm:"name=display_name"`
	ExtensionNumber *int64  `multipartForm:"name=extension_number"`
	SiteID          *string `multipartForm:"name=site_id"`
}

type CreateASharedLineGroupRequests struct {
	Object  *CreateASharedLineGroupApplicationJSON   `request:"mediaType=application/json"`
	Object1 *CreateASharedLineGroupMultipartFormData `request:"mediaType=multipart/form-data"`
}

type CreateASharedLineGroupSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type CreateASharedLineGroupRequest struct {
	Request  *CreateASharedLineGroupRequests
	Security CreateASharedLineGroupSecurity
}

type CreateASharedLineGroupResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	CreateASharedLineGroup200ApplicationJSONAny *interface{}
}
