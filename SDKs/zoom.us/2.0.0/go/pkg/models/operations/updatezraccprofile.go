package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateZrAccProfileApplicationJSONBasic struct {
	RequiredCodeToExt *bool   `json:"required_code_to_ext,omitempty"`
	RoomPasscode      *string `json:"room_passcode,omitempty"`
	SupportEmail      *string `json:"support_email,omitempty"`
	SupportPhone      *string `json:"support_phone,omitempty"`
}

type UpdateZrAccProfileApplicationJSON struct {
	Basic *UpdateZrAccProfileApplicationJSONBasic `json:"basic,omitempty"`
}

type UpdateZrAccProfileMultipartFormDataBasic struct {
	RequiredCodeToExt *bool   `json:"required_code_to_ext,omitempty"`
	RoomPasscode      *string `json:"room_passcode,omitempty"`
	SupportEmail      *string `json:"support_email,omitempty"`
	SupportPhone      *string `json:"support_phone,omitempty"`
}

type UpdateZrAccProfileMultipartFormData struct {
	Basic *UpdateZrAccProfileMultipartFormDataBasic `multipartForm:"name=basic,json"`
}

type UpdateZrAccProfileRequests struct {
	Object  *UpdateZrAccProfileApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UpdateZrAccProfileMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UpdateZrAccProfileSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UpdateZrAccProfileRequest struct {
	Request  *UpdateZrAccProfileRequests
	Security UpdateZrAccProfileSecurity
}

type UpdateZrAccProfileResponse struct {
	Body                                       []byte
	ContentType                                string
	StatusCode                                 int64
	UpdateZRAccProfile204ApplicationJSONObject map[string]interface{}
}
