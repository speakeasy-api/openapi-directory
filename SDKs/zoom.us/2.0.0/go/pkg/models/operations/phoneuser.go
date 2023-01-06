package operations

import (
	"openapi/pkg/models/shared"
)

type PhoneUserPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type PhoneUserSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type PhoneUser200ApplicationJSONCallingPlan struct {
	Type *int64 `json:"type,omitempty"`
}

type PhoneUser200ApplicationJSONPhoneNumbers struct {
	ID     *string `json:"id,omitempty"`
	Number *string `json:"number,omitempty"`
}

type PhoneUser200ApplicationJSONStatusEnum string

const (
	PhoneUser200ApplicationJSONStatusEnumActivate   PhoneUser200ApplicationJSONStatusEnum = "activate"
	PhoneUser200ApplicationJSONStatusEnumDeactivate PhoneUser200ApplicationJSONStatusEnum = "deactivate"
)

// PhoneUser200ApplicationJSON
// Zoom User Profile
type PhoneUser200ApplicationJSON struct {
	CallingPlan     []PhoneUser200ApplicationJSONCallingPlan  `json:"calling_plan,omitempty"`
	Email           *string                                   `json:"email,omitempty"`
	ExtensionNumber *int64                                    `json:"extension_number,omitempty"`
	ID              *string                                   `json:"id,omitempty"`
	PhoneNumbers    []PhoneUser200ApplicationJSONPhoneNumbers `json:"phone_numbers,omitempty"`
	PhoneUserID     *string                                   `json:"phone_user_id,omitempty"`
	SiteAdmin       *bool                                     `json:"site_admin,omitempty"`
	SiteID          *string                                   `json:"site_id,omitempty"`
	Status          *PhoneUser200ApplicationJSONStatusEnum    `json:"status,omitempty"`
}

type PhoneUserRequest struct {
	PathParams PhoneUserPathParams
	Security   PhoneUserSecurity
}

type PhoneUserResponse struct {
	Body                              []byte
	ContentType                       string
	StatusCode                        int64
	PhoneUser200ApplicationJSONObject *PhoneUser200ApplicationJSON
}
