package operations

import (
	"openapi/pkg/models/shared"
)

type DeviceListQueryParams struct {
	NextPageToken *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageNumber    *int64  `queryParam:"style=form,explode=true,name=page_number"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type DeviceListSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DeviceListH323SipDeviceListTheH323SipDeviceObjectEncryptionEnum string

const (
	DeviceListH323SIPDeviceListTheH323SIPDeviceObjectEncryptionEnumAuto DeviceListH323SipDeviceListTheH323SipDeviceObjectEncryptionEnum = "auto"
	DeviceListH323SIPDeviceListTheH323SIPDeviceObjectEncryptionEnumYes  DeviceListH323SipDeviceListTheH323SipDeviceObjectEncryptionEnum = "yes"
	DeviceListH323SIPDeviceListTheH323SIPDeviceObjectEncryptionEnumNo   DeviceListH323SipDeviceListTheH323SipDeviceObjectEncryptionEnum = "no"
)

type DeviceListH323SipDeviceListTheH323SipDeviceObjectProtocolEnum string

const (
	DeviceListH323SIPDeviceListTheH323SIPDeviceObjectProtocolEnumH323 DeviceListH323SipDeviceListTheH323SipDeviceObjectProtocolEnum = "H.323"
	DeviceListH323SIPDeviceListTheH323SIPDeviceObjectProtocolEnumSip  DeviceListH323SipDeviceListTheH323SipDeviceObjectProtocolEnum = "SIP"
)

// DeviceListH323SipDeviceListTheH323SipDeviceObject
// The H.323/SIP device object.
type DeviceListH323SipDeviceListTheH323SipDeviceObject struct {
	Encryption DeviceListH323SipDeviceListTheH323SipDeviceObjectEncryptionEnum `json:"encryption"`
	IP         string                                                          `json:"ip"`
	Name       string                                                          `json:"name"`
	Protocol   DeviceListH323SipDeviceListTheH323SipDeviceObjectProtocolEnum   `json:"protocol"`
}

// DeviceListH323SipDeviceList
// Pagination Object.
type DeviceListH323SipDeviceList struct {
	Devices []DeviceListH323SipDeviceListTheH323SipDeviceObject `json:"devices,omitempty"`
}

type DeviceListRequest struct {
	QueryParams DeviceListQueryParams
	Security    DeviceListSecurity
}

type DeviceListResponse struct {
	Body              []byte
	ContentType       string
	H323SIPDeviceList *DeviceListH323SipDeviceList
	StatusCode        int64
}
