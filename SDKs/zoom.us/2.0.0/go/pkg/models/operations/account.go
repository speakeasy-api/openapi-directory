package operations

import (
	"time"
)

type AccountPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type Account200ApplicationJSONOptionsPayModeEnum string

const (
	Account200ApplicationJSONOptionsPayModeEnumMaster Account200ApplicationJSONOptionsPayModeEnum = "master"
	Account200ApplicationJSONOptionsPayModeEnumSub    Account200ApplicationJSONOptionsPayModeEnum = "sub"
)

// Account200ApplicationJSONOptions
// Account options object.
type Account200ApplicationJSONOptions struct {
	BillingAutoRenew     *bool                                        `json:"billing_auto_renew,omitempty"`
	MeetingConnectorList []string                                     `json:"meeting_connector_list,omitempty"`
	PayMode              *Account200ApplicationJSONOptionsPayModeEnum `json:"pay_mode,omitempty"`
	RoomConnectorList    []string                                     `json:"room_connector_list,omitempty"`
	ShareMc              *bool                                        `json:"share_mc,omitempty"`
	ShareRc              *bool                                        `json:"share_rc,omitempty"`
}

type Account200ApplicationJSON struct {
	CreatedAt  *time.Time                        `json:"created_at,omitempty"`
	ID         *string                           `json:"id,omitempty"`
	Options    *Account200ApplicationJSONOptions `json:"options,omitempty"`
	OwnerEmail *string                           `json:"owner_email,omitempty"`
	OwnerID    *string                           `json:"owner_id,omitempty"`
	VanityURL  *string                           `json:"vanity_url,omitempty"`
}

type AccountRequest struct {
	PathParams AccountPathParams
}

type AccountResponse struct {
	Body                            []byte
	ContentType                     string
	StatusCode                      int64
	Account200ApplicationJSONObject *Account200ApplicationJSON
}
