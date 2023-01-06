package operations

import (
	"openapi/pkg/models/shared"
)

type AccountOptionsUpdatePathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type AccountOptionsUpdateApplicationJSONPayModeEnum string

const (
	AccountOptionsUpdateApplicationJSONPayModeEnumMaster AccountOptionsUpdateApplicationJSONPayModeEnum = "master"
	AccountOptionsUpdateApplicationJSONPayModeEnumSub    AccountOptionsUpdateApplicationJSONPayModeEnum = "sub"
)

// AccountOptionsUpdateApplicationJSON
// Account options object.
type AccountOptionsUpdateApplicationJSON struct {
	BillingAutoRenew     *bool                                           `json:"billing_auto_renew,omitempty"`
	MeetingConnectorList []string                                        `json:"meeting_connector_list,omitempty"`
	PayMode              *AccountOptionsUpdateApplicationJSONPayModeEnum `json:"pay_mode,omitempty"`
	RoomConnectorList    []string                                        `json:"room_connector_list,omitempty"`
	ShareMc              *bool                                           `json:"share_mc,omitempty"`
	ShareRc              *bool                                           `json:"share_rc,omitempty"`
}

type AccountOptionsUpdateMultipartFormDataPayModeEnum string

const (
	AccountOptionsUpdateMultipartFormDataPayModeEnumMaster AccountOptionsUpdateMultipartFormDataPayModeEnum = "master"
	AccountOptionsUpdateMultipartFormDataPayModeEnumSub    AccountOptionsUpdateMultipartFormDataPayModeEnum = "sub"
)

// AccountOptionsUpdateMultipartFormData
// Account options object.
type AccountOptionsUpdateMultipartFormData struct {
	BillingAutoRenew     *bool                                             `multipartForm:"name=billing_auto_renew"`
	MeetingConnectorList []string                                          `multipartForm:"name=meeting_connector_list,json"`
	PayMode              *AccountOptionsUpdateMultipartFormDataPayModeEnum `multipartForm:"name=pay_mode"`
	RoomConnectorList    []string                                          `multipartForm:"name=room_connector_list,json"`
	ShareMc              *bool                                             `multipartForm:"name=share_mc"`
	ShareRc              *bool                                             `multipartForm:"name=share_rc"`
}

type AccountOptionsUpdateRequests struct {
	Object  *AccountOptionsUpdateApplicationJSON   `request:"mediaType=application/json"`
	Object1 *AccountOptionsUpdateMultipartFormData `request:"mediaType=multipart/form-data"`
}

type AccountOptionsUpdateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type AccountOptionsUpdateRequest struct {
	PathParams AccountOptionsUpdatePathParams
	Request    AccountOptionsUpdateRequests
	Security   AccountOptionsUpdateSecurity
}

type AccountOptionsUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
