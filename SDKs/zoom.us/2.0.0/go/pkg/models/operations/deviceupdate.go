package operations

type DeviceUpdatePathParams struct {
	DeviceID string `pathParam:"style=simple,explode=false,name=deviceId"`
}

type DeviceUpdateTheH323SipDeviceObjectEncryptionEnum string

const (
	DeviceUpdateTheH323SIPDeviceObjectEncryptionEnumAuto DeviceUpdateTheH323SipDeviceObjectEncryptionEnum = "auto"
	DeviceUpdateTheH323SIPDeviceObjectEncryptionEnumYes  DeviceUpdateTheH323SipDeviceObjectEncryptionEnum = "yes"
	DeviceUpdateTheH323SIPDeviceObjectEncryptionEnumNo   DeviceUpdateTheH323SipDeviceObjectEncryptionEnum = "no"
)

type DeviceUpdateTheH323SipDeviceObjectProtocolEnum string

const (
	DeviceUpdateTheH323SIPDeviceObjectProtocolEnumH323 DeviceUpdateTheH323SipDeviceObjectProtocolEnum = "H.323"
	DeviceUpdateTheH323SIPDeviceObjectProtocolEnumSip  DeviceUpdateTheH323SipDeviceObjectProtocolEnum = "SIP"
)

// DeviceUpdateTheH323SipDeviceObject
// The H.323/SIP device object.
type DeviceUpdateTheH323SipDeviceObject struct {
	Encryption DeviceUpdateTheH323SipDeviceObjectEncryptionEnum `json:"encryption" multipartForm:"name=encryption"`
	IP         string                                           `json:"ip" multipartForm:"name=ip"`
	Name       string                                           `json:"name" multipartForm:"name=name"`
	Protocol   DeviceUpdateTheH323SipDeviceObjectProtocolEnum   `json:"protocol" multipartForm:"name=protocol"`
}

type DeviceUpdateRequests struct {
	TheH323SIPDeviceObject  *DeviceUpdateTheH323SipDeviceObject `request:"mediaType=application/json"`
	TheH323SIPDeviceObject1 *DeviceUpdateTheH323SipDeviceObject `request:"mediaType=multipart/form-data"`
}

type DeviceUpdateRequest struct {
	PathParams DeviceUpdatePathParams
	Request    DeviceUpdateRequests
}

type DeviceUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
