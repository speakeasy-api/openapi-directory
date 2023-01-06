package operations

import (
	"openapi/pkg/models/shared"
)

type GetZrAccountProfileSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GetZrAccountProfile200ApplicationJSONBasic struct {
	RequiredCodeToExt *bool   `json:"required_code_to_ext,omitempty"`
	RoomPasscode      *string `json:"room_passcode,omitempty"`
	SupportEmail      *string `json:"support_email,omitempty"`
	SupportPhone      *string `json:"support_phone,omitempty"`
}

type GetZrAccountProfile200ApplicationJSON struct {
	Basic *GetZrAccountProfile200ApplicationJSONBasic `json:"basic,omitempty"`
}

type GetZrAccountProfileRequest struct {
	Security GetZrAccountProfileSecurity
}

type GetZrAccountProfileResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	GetZRAccountProfile200ApplicationJSONObject *GetZrAccountProfile200ApplicationJSON
}
