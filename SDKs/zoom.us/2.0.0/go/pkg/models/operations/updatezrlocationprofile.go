package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateZrLocationProfilePathParams struct {
	LocationID string `pathParam:"style=simple,explode=false,name=locationId"`
}

type UpdateZrLocationProfileApplicationJSONBasic struct {
	Address           *string `json:"address,omitempty"`
	Description       *string `json:"description ,omitempty"`
	Name              *string `json:"name,omitempty"`
	RequiredCodeToExt *bool   `json:"required_code_to_ext,omitempty"`
	RoomPasscode      *string `json:"room_passcode,omitempty"`
	SupportEmail      *string `json:"support_email,omitempty"`
	SupportPhone      *string `json:"support_phone,omitempty"`
	Timezone          *string `json:"timezone,omitempty"`
}

type UpdateZrLocationProfileApplicationJSON struct {
	Basic *UpdateZrLocationProfileApplicationJSONBasic `json:"basic,omitempty"`
}

type UpdateZrLocationProfileMultipartFormDataBasic struct {
	Address           *string `json:"address,omitempty"`
	Description       *string `json:"description ,omitempty"`
	Name              *string `json:"name,omitempty"`
	RequiredCodeToExt *bool   `json:"required_code_to_ext,omitempty"`
	RoomPasscode      *string `json:"room_passcode,omitempty"`
	SupportEmail      *string `json:"support_email,omitempty"`
	SupportPhone      *string `json:"support_phone,omitempty"`
	Timezone          *string `json:"timezone,omitempty"`
}

type UpdateZrLocationProfileMultipartFormData struct {
	Basic *UpdateZrLocationProfileMultipartFormDataBasic `multipartForm:"name=basic,json"`
}

type UpdateZrLocationProfileRequests struct {
	Object  *UpdateZrLocationProfileApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UpdateZrLocationProfileMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UpdateZrLocationProfileSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UpdateZrLocationProfileRequest struct {
	PathParams UpdateZrLocationProfilePathParams
	Request    *UpdateZrLocationProfileRequests
	Security   UpdateZrLocationProfileSecurity
}

type UpdateZrLocationProfileResponse struct {
	Body                                         []byte
	ContentType                                  string
	StatusCode                                   int64
	UpdateZRLocationProfile200ApplicationJSONAny *interface{}
}
