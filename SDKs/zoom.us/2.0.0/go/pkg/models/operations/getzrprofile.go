package operations

import (
	"openapi/pkg/models/shared"
)

type GetZrProfilePathParams struct {
	RoomID string `pathParam:"style=simple,explode=false,name=roomId"`
}

type GetZrProfileSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GetZrProfile200ApplicationJSONBasic struct {
	ActivationCode     *string `json:"activation_code,omitempty"`
	HideRoomInContacts *bool   `json:"hide_room_in_contacts,omitempty"`
	Name               *string `json:"name,omitempty"`
	RequiredCodeToExt  *bool   `json:"required_code_to_ext,omitempty"`
	RoomPasscode       *string `json:"room_passcode,omitempty"`
	SupportEmail       *string `json:"support_email,omitempty"`
	SupportPhone       *string `json:"support_phone,omitempty"`
}

type GetZrProfile200ApplicationJSON struct {
	Basic *GetZrProfile200ApplicationJSONBasic `json:"basic,omitempty"`
}

type GetZrProfileRequest struct {
	PathParams GetZrProfilePathParams
	Security   GetZrProfileSecurity
}

type GetZrProfileResponse struct {
	Body                                 []byte
	ContentType                          string
	StatusCode                           int64
	GetZRProfile200ApplicationJSONObject *GetZrProfile200ApplicationJSON
}
