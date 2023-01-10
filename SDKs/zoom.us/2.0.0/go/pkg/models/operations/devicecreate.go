package operations

import (
	"openapi/pkg/models/shared"
)

type DeviceCreateTheH323SipDeviceObjectEncryptionEnum string

const (
	DeviceCreateTheH323SIPDeviceObjectEncryptionEnumAuto DeviceCreateTheH323SipDeviceObjectEncryptionEnum = "auto"
	DeviceCreateTheH323SIPDeviceObjectEncryptionEnumYes  DeviceCreateTheH323SipDeviceObjectEncryptionEnum = "yes"
	DeviceCreateTheH323SIPDeviceObjectEncryptionEnumNo   DeviceCreateTheH323SipDeviceObjectEncryptionEnum = "no"
)

type DeviceCreateTheH323SipDeviceObjectProtocolEnum string

const (
	DeviceCreateTheH323SIPDeviceObjectProtocolEnumH323 DeviceCreateTheH323SipDeviceObjectProtocolEnum = "H.323"
	DeviceCreateTheH323SIPDeviceObjectProtocolEnumSip  DeviceCreateTheH323SipDeviceObjectProtocolEnum = "SIP"
)

// DeviceCreateTheH323SipDeviceObject
// The H.323/SIP device object.
type DeviceCreateTheH323SipDeviceObject struct {
	Encryption DeviceCreateTheH323SipDeviceObjectEncryptionEnum `json:"encryption" multipartForm:"name=encryption"`
	IP         string                                           `json:"ip" multipartForm:"name=ip"`
	Name       string                                           `json:"name" multipartForm:"name=name"`
	Protocol   DeviceCreateTheH323SipDeviceObjectProtocolEnum   `json:"protocol" multipartForm:"name=protocol"`
}

type DeviceCreateRequests struct {
	TheH323SIPDeviceObject  *DeviceCreateTheH323SipDeviceObject `request:"mediaType=application/json"`
	TheH323SIPDeviceObject1 *DeviceCreateTheH323SipDeviceObject `request:"mediaType=multipart/form-data"`
}

type DeviceCreateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// DeviceCreateTheH323SipDeviceObject1
// The H.323/SIP device object.
type DeviceCreateTheH323SipDeviceObject1 struct {
	Encryption DeviceCreateTheH323SipDeviceObjectEncryptionEnum `json:"encryption"`
	ID         *string                                          `json:"id,omitempty"`
	IP         string                                           `json:"ip"`
	Name       string                                           `json:"name"`
	Protocol   DeviceCreateTheH323SipDeviceObjectProtocolEnum   `json:"protocol"`
}

type DeviceCreateRequest struct {
	Request  DeviceCreateRequests
	Security DeviceCreateSecurity
}

type DeviceCreateResponse struct {
	Body                   []byte
	ContentType            string
	Headers                map[string][]string
	StatusCode             int64
	TheH323SIPDeviceObject *DeviceCreateTheH323SipDeviceObject1
}
