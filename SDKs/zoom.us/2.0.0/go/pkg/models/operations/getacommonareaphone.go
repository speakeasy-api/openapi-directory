package operations

import (
	"openapi/pkg/models/shared"
)

type GetACommonAreaPhonePathParams struct {
	CommonAreaPhoneID string `pathParam:"style=simple,explode=false,name=commonAreaPhoneId"`
}

type GetACommonAreaPhoneSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GetACommonAreaPhone200ApplicationJSONProvisionSipAccounts struct {
	AuthorizationID *string `json:"authorization_id,omitempty"`
	OutboundProxy   *string `json:"outbound_proxy,omitempty"`
	Password        *string `json:"password,omitempty"`
	SipDomain       *string `json:"sip_domain,omitempty"`
	UserName        *string `json:"user_name,omitempty"`
}

type GetACommonAreaPhone200ApplicationJSONProvisionTypeEnum string

const (
	GetACommonAreaPhone200ApplicationJSONProvisionTypeEnumAssisted GetACommonAreaPhone200ApplicationJSONProvisionTypeEnum = "assisted"
	GetACommonAreaPhone200ApplicationJSONProvisionTypeEnumZtp      GetACommonAreaPhone200ApplicationJSONProvisionTypeEnum = "ztp"
	GetACommonAreaPhone200ApplicationJSONProvisionTypeEnumManual   GetACommonAreaPhone200ApplicationJSONProvisionTypeEnum = "manual"
)

// GetACommonAreaPhone200ApplicationJSONProvision
// Provisioning information of the common area phone.
type GetACommonAreaPhone200ApplicationJSONProvision struct {
	SipAccounts []GetACommonAreaPhone200ApplicationJSONProvisionSipAccounts `json:"sip_accounts,omitempty"`
	Type        *GetACommonAreaPhone200ApplicationJSONProvisionTypeEnum     `json:"type,omitempty"`
	URL         *string                                                     `json:"url,omitempty"`
}

type GetACommonAreaPhone200ApplicationJSONSite struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type GetACommonAreaPhone200ApplicationJSON struct {
	DeviceType *string                                         `json:"device_type,omitempty"`
	ID         *string                                         `json:"id,omitempty"`
	MacAddress *string                                         `json:"mac_address,omitempty"`
	Name       *string                                         `json:"name,omitempty"`
	Provision  *GetACommonAreaPhone200ApplicationJSONProvision `json:"provision,omitempty"`
	Site       *GetACommonAreaPhone200ApplicationJSONSite      `json:"site,omitempty"`
	Status     *string                                         `json:"status,omitempty"`
}

type GetACommonAreaPhoneRequest struct {
	PathParams GetACommonAreaPhonePathParams
	Security   GetACommonAreaPhoneSecurity
}

type GetACommonAreaPhoneResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	GetACommonAreaPhone200ApplicationJSONObject *GetACommonAreaPhone200ApplicationJSON
}
