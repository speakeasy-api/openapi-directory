package operations

import (
	"openapi/pkg/models/shared"
)

type PhoneUserSettingsPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type PhoneUserSettingsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type PhoneUserSettings200ApplicationJSONDeskPhoneKeysPositions struct {
	PrimaryNumber *string `json:"primary_number,omitempty"`
}

// PhoneUserSettings200ApplicationJSONDeskPhone
// Contains information on phones or devices provisioned for the user.
type PhoneUserSettings200ApplicationJSONDeskPhone struct {
	KeysPositions *PhoneUserSettings200ApplicationJSONDeskPhoneKeysPositions `json:"keys_positions,omitempty"`
}

// PhoneUserSettings200ApplicationJSONOutboundCaller
// Outbound Caller Info
type PhoneUserSettings200ApplicationJSONOutboundCaller struct {
	Number *string `json:"number,omitempty"`
}

type PhoneUserSettings200ApplicationJSONOutboundCallerIds struct {
	IsDefault *bool   `json:"is_default,omitempty"`
	Name      *string `json:"name,omitempty"`
	Number    *string `json:"number,omitempty"`
}

// PhoneUserSettings200ApplicationJSONVoiceMail
// [Shared voicemail access](https://support.zoom.us/hc/en-us/articles/360033863991-Sharing-and-controlling-access-to-a-voicemail-inbox) assigned to user.
type PhoneUserSettings200ApplicationJSONVoiceMail struct {
	AccessUserID *string `json:"access_user_id,omitempty"`
	Delete       *bool   `json:"delete,omitempty"`
	Download     *bool   `json:"download,omitempty"`
	SharedID     *string `json:"shared_id,omitempty"`
}

// PhoneUserSettings200ApplicationJSON
// Phone User Setting
type PhoneUserSettings200ApplicationJSON struct {
	AreaCode          *string                                               `json:"area_code,omitempty"`
	CompanyNumber     *string                                               `json:"company_number,omitempty"`
	DeskPhone         *PhoneUserSettings200ApplicationJSONDeskPhone         `json:"desk_phone,omitempty"`
	OutboundCaller    *PhoneUserSettings200ApplicationJSONOutboundCaller    `json:"outbound_caller,omitempty"`
	OutboundCallerIds *PhoneUserSettings200ApplicationJSONOutboundCallerIds `json:"outbound_caller_ids,omitempty"`
	VoiceMail         *PhoneUserSettings200ApplicationJSONVoiceMail         `json:"voice_mail,omitempty"`
}

type PhoneUserSettingsRequest struct {
	PathParams PhoneUserSettingsPathParams
	Security   PhoneUserSettingsSecurity
}

type PhoneUserSettingsResponse struct {
	Body                                      []byte
	ContentType                               string
	StatusCode                                int64
	PhoneUserSettings200ApplicationJSONObject *PhoneUserSettings200ApplicationJSON
}
