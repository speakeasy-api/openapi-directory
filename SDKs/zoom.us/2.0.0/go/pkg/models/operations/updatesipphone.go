package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSipPhonePathParams struct {
	PhoneID string `pathParam:"style=simple,explode=false,name=phoneId"`
}

type UpdateSipPhoneApplicationJSONTransportProtocolEnum string

const (
	UpdateSIPPhoneApplicationJSONTransportProtocolEnumUDP  UpdateSipPhoneApplicationJSONTransportProtocolEnum = "UDP"
	UpdateSIPPhoneApplicationJSONTransportProtocolEnumTCP  UpdateSipPhoneApplicationJSONTransportProtocolEnum = "TCP"
	UpdateSIPPhoneApplicationJSONTransportProtocolEnumTLS  UpdateSipPhoneApplicationJSONTransportProtocolEnum = "TLS"
	UpdateSIPPhoneApplicationJSONTransportProtocolEnumAuto UpdateSipPhoneApplicationJSONTransportProtocolEnum = "AUTO"
)

type UpdateSipPhoneApplicationJSONTransportProtocol2Enum string

const (
	UpdateSIPPhoneApplicationJSONTransportProtocol2EnumUDP  UpdateSipPhoneApplicationJSONTransportProtocol2Enum = "UDP"
	UpdateSIPPhoneApplicationJSONTransportProtocol2EnumTCP  UpdateSipPhoneApplicationJSONTransportProtocol2Enum = "TCP"
	UpdateSIPPhoneApplicationJSONTransportProtocol2EnumTLS  UpdateSipPhoneApplicationJSONTransportProtocol2Enum = "TLS"
	UpdateSIPPhoneApplicationJSONTransportProtocol2EnumAuto UpdateSipPhoneApplicationJSONTransportProtocol2Enum = "AUTO"
)

type UpdateSipPhoneApplicationJSONTransportProtocol3Enum string

const (
	UpdateSIPPhoneApplicationJSONTransportProtocol3EnumUDP  UpdateSipPhoneApplicationJSONTransportProtocol3Enum = "UDP"
	UpdateSIPPhoneApplicationJSONTransportProtocol3EnumTCP  UpdateSipPhoneApplicationJSONTransportProtocol3Enum = "TCP"
	UpdateSIPPhoneApplicationJSONTransportProtocol3EnumTLS  UpdateSipPhoneApplicationJSONTransportProtocol3Enum = "TLS"
	UpdateSIPPhoneApplicationJSONTransportProtocol3EnumAuto UpdateSipPhoneApplicationJSONTransportProtocol3Enum = "AUTO"
)

type UpdateSipPhoneApplicationJSON struct {
	AuthorizationName      string                                               `json:"authorization_name"`
	Domain                 string                                               `json:"domain"`
	Password               string                                               `json:"password"`
	ProxyServer            string                                               `json:"proxy_server"`
	ProxyServer2           string                                               `json:"proxy_server2"`
	ProxyServer3           string                                               `json:"proxy_server3"`
	RegisterServer         string                                               `json:"register_server"`
	RegisterServer2        string                                               `json:"register_server2"`
	RegisterServer3        string                                               `json:"register_server3"`
	RegistrationExpireTime *int64                                               `json:"registration_expire_time,omitempty"`
	TransportProtocol      *UpdateSipPhoneApplicationJSONTransportProtocolEnum  `json:"transport_protocol,omitempty"`
	TransportProtocol2     *UpdateSipPhoneApplicationJSONTransportProtocol2Enum `json:"transport_protocol2,omitempty"`
	TransportProtocol3     *UpdateSipPhoneApplicationJSONTransportProtocol3Enum `json:"transport_protocol3,omitempty"`
	UserName               string                                               `json:"user_name"`
	VoiceMail              string                                               `json:"voice_mail"`
}

type UpdateSipPhoneMultipartFormDataTransportProtocolEnum string

const (
	UpdateSIPPhoneMultipartFormDataTransportProtocolEnumUDP  UpdateSipPhoneMultipartFormDataTransportProtocolEnum = "UDP"
	UpdateSIPPhoneMultipartFormDataTransportProtocolEnumTCP  UpdateSipPhoneMultipartFormDataTransportProtocolEnum = "TCP"
	UpdateSIPPhoneMultipartFormDataTransportProtocolEnumTLS  UpdateSipPhoneMultipartFormDataTransportProtocolEnum = "TLS"
	UpdateSIPPhoneMultipartFormDataTransportProtocolEnumAuto UpdateSipPhoneMultipartFormDataTransportProtocolEnum = "AUTO"
)

type UpdateSipPhoneMultipartFormDataTransportProtocol2Enum string

const (
	UpdateSIPPhoneMultipartFormDataTransportProtocol2EnumUDP  UpdateSipPhoneMultipartFormDataTransportProtocol2Enum = "UDP"
	UpdateSIPPhoneMultipartFormDataTransportProtocol2EnumTCP  UpdateSipPhoneMultipartFormDataTransportProtocol2Enum = "TCP"
	UpdateSIPPhoneMultipartFormDataTransportProtocol2EnumTLS  UpdateSipPhoneMultipartFormDataTransportProtocol2Enum = "TLS"
	UpdateSIPPhoneMultipartFormDataTransportProtocol2EnumAuto UpdateSipPhoneMultipartFormDataTransportProtocol2Enum = "AUTO"
)

type UpdateSipPhoneMultipartFormDataTransportProtocol3Enum string

const (
	UpdateSIPPhoneMultipartFormDataTransportProtocol3EnumUDP  UpdateSipPhoneMultipartFormDataTransportProtocol3Enum = "UDP"
	UpdateSIPPhoneMultipartFormDataTransportProtocol3EnumTCP  UpdateSipPhoneMultipartFormDataTransportProtocol3Enum = "TCP"
	UpdateSIPPhoneMultipartFormDataTransportProtocol3EnumTLS  UpdateSipPhoneMultipartFormDataTransportProtocol3Enum = "TLS"
	UpdateSIPPhoneMultipartFormDataTransportProtocol3EnumAuto UpdateSipPhoneMultipartFormDataTransportProtocol3Enum = "AUTO"
)

type UpdateSipPhoneMultipartFormData struct {
	AuthorizationName      string                                                 `multipartForm:"name=authorization_name"`
	Domain                 string                                                 `multipartForm:"name=domain"`
	Password               string                                                 `multipartForm:"name=password"`
	ProxyServer            string                                                 `multipartForm:"name=proxy_server"`
	ProxyServer2           string                                                 `multipartForm:"name=proxy_server2"`
	ProxyServer3           string                                                 `multipartForm:"name=proxy_server3"`
	RegisterServer         string                                                 `multipartForm:"name=register_server"`
	RegisterServer2        string                                                 `multipartForm:"name=register_server2"`
	RegisterServer3        string                                                 `multipartForm:"name=register_server3"`
	RegistrationExpireTime *int64                                                 `multipartForm:"name=registration_expire_time"`
	TransportProtocol      *UpdateSipPhoneMultipartFormDataTransportProtocolEnum  `multipartForm:"name=transport_protocol"`
	TransportProtocol2     *UpdateSipPhoneMultipartFormDataTransportProtocol2Enum `multipartForm:"name=transport_protocol2"`
	TransportProtocol3     *UpdateSipPhoneMultipartFormDataTransportProtocol3Enum `multipartForm:"name=transport_protocol3"`
	UserName               string                                                 `multipartForm:"name=user_name"`
	VoiceMail              string                                                 `multipartForm:"name=voice_mail"`
}

type UpdateSipPhoneRequests struct {
	Object  *UpdateSipPhoneApplicationJSON   `request:"mediaType=application/json"`
	Object1 *UpdateSipPhoneMultipartFormData `request:"mediaType=multipart/form-data"`
}

type UpdateSipPhoneSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type UpdateSipPhoneRequest struct {
	PathParams UpdateSipPhonePathParams
	Request    *UpdateSipPhoneRequests
	Security   UpdateSipPhoneSecurity
}

type UpdateSipPhoneResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	UpdateSIPPhone204ApplicationJSONObject map[string]interface{}
}
