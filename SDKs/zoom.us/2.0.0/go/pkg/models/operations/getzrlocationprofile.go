package operations

import (
	"openapi/pkg/models/shared"
)

type GetZrLocationProfilePathParams struct {
	LocationID string `pathParam:"style=simple,explode=false,name=locationId"`
}

type GetZrLocationProfileSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GetZrLocationProfile200ApplicationJSONBasic struct {
	Address           *string `json:"address,omitempty"`
	Description       *string `json:"description ,omitempty"`
	Name              *string `json:"name,omitempty"`
	RequiredCodeToExt *bool   `json:"required_code_to_ext,omitempty"`
	RoomPasscode      *string `json:"room_passcode,omitempty"`
	SupportEmail      *string `json:"support_email,omitempty"`
	SupportPhone      *string `json:"support_phone,omitempty"`
	Timezone          *string `json:"timezone,omitempty"`
}

type GetZrLocationProfile200ApplicationJSON struct {
	Basic *GetZrLocationProfile200ApplicationJSONBasic `json:"basic,omitempty"`
}

type GetZrLocationProfileRequest struct {
	PathParams GetZrLocationProfilePathParams
	Security   GetZrLocationProfileSecurity
}

type GetZrLocationProfileResponse struct {
	Body                                         []byte
	ContentType                                  string
	StatusCode                                   int64
	GetZRLocationProfile200ApplicationJSONObject *GetZrLocationProfile200ApplicationJSON
}
