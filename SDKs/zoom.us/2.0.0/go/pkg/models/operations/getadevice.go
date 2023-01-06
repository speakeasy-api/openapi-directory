package operations

import (
	"openapi/pkg/models/shared"
)

type GetADevicePathParams struct {
	DeviceID string `pathParam:"style=simple,explode=false,name=deviceId"`
}

type GetADeviceSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// GetADevice200ApplicationJSONAssignee
// User to whom the device has been assigned.
type GetADevice200ApplicationJSONAssignee struct {
	ExtensionNumber *int64  `json:"extension_number,omitempty"`
	ID              *string `json:"id,omitempty"`
	Name            *string `json:"name,omitempty"`
}

// GetADevice200ApplicationJSONProvisionSipAccountsSharedLineLineSubscription
// Line subscription.
type GetADevice200ApplicationJSONProvisionSipAccountsSharedLineLineSubscription struct {
	DisplayName     *string `json:"display_name,omitempty"`
	ExtensionNumber *int64  `json:"extension_number,omitempty"`
	PhoneNumber     *string `json:"phone_number,omitempty"`
}

// GetADevice200ApplicationJSONProvisionSipAccountsSharedLine
// Return additional provisioning information with generic device SIP credentials.
type GetADevice200ApplicationJSONProvisionSipAccountsSharedLine struct {
	Alias            *string                                                                     `json:"alias,omitempty"`
	LineSubscription *GetADevice200ApplicationJSONProvisionSipAccountsSharedLineLineSubscription `json:"line_subscription,omitempty"`
	OutboundCallerID *string                                                                     `json:"outbound_caller_id,omitempty"`
}

type GetADevice200ApplicationJSONProvisionSipAccounts struct {
	AuthorizationID *string                                                     `json:"authorization_id,omitempty"`
	OutboundProxy   *string                                                     `json:"outbound_proxy,omitempty"`
	Password        *string                                                     `json:"password,omitempty"`
	SharedLine      *GetADevice200ApplicationJSONProvisionSipAccountsSharedLine `json:"shared_line,omitempty"`
	SipDomain       *string                                                     `json:"sip_domain,omitempty"`
	UserName        *string                                                     `json:"user_name,omitempty"`
}

type GetADevice200ApplicationJSONProvisionTypeEnum string

const (
	GetADevice200ApplicationJSONProvisionTypeEnumAssisted GetADevice200ApplicationJSONProvisionTypeEnum = "assisted"
	GetADevice200ApplicationJSONProvisionTypeEnumZtp      GetADevice200ApplicationJSONProvisionTypeEnum = "ztp"
	GetADevice200ApplicationJSONProvisionTypeEnumManual   GetADevice200ApplicationJSONProvisionTypeEnum = "manual"
)

// GetADevice200ApplicationJSONProvision
// Provisioning information of a device.
type GetADevice200ApplicationJSONProvision struct {
	SipAccounts []GetADevice200ApplicationJSONProvisionSipAccounts `json:"sip_accounts,omitempty"`
	Type        *GetADevice200ApplicationJSONProvisionTypeEnum     `json:"type,omitempty"`
	URL         *string                                            `json:"url,omitempty"`
}

type GetADevice200ApplicationJSONSite struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type GetADevice200ApplicationJSONStatusEnum string

const (
	GetADevice200ApplicationJSONStatusEnumOnline  GetADevice200ApplicationJSONStatusEnum = "online"
	GetADevice200ApplicationJSONStatusEnumOffline GetADevice200ApplicationJSONStatusEnum = "offline"
)

type GetADevice200ApplicationJSON struct {
	Assignee    *GetADevice200ApplicationJSONAssignee   `json:"assignee,omitempty"`
	DeviceType  *string                                 `json:"device_type,omitempty"`
	DisplayName *string                                 `json:"display_name,omitempty"`
	ID          *string                                 `json:"id,omitempty"`
	MacAddress  *string                                 `json:"mac_address,omitempty"`
	Provision   *GetADevice200ApplicationJSONProvision  `json:"provision,omitempty"`
	Site        *GetADevice200ApplicationJSONSite       `json:"site,omitempty"`
	Status      *GetADevice200ApplicationJSONStatusEnum `json:"status,omitempty"`
}

type GetADeviceRequest struct {
	PathParams GetADevicePathParams
	Security   GetADeviceSecurity
}

type GetADeviceResponse struct {
	Body                               []byte
	ContentType                        string
	StatusCode                         int64
	GetADevice200ApplicationJSONObject *GetADevice200ApplicationJSON
}
