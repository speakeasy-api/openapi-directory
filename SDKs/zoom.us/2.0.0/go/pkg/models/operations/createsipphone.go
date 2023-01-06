package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSipPhoneApplicationJSONTransportProtocolEnum string

const (
	CreateSIPPhoneApplicationJSONTransportProtocolEnumUDP  CreateSipPhoneApplicationJSONTransportProtocolEnum = "UDP"
	CreateSIPPhoneApplicationJSONTransportProtocolEnumTCP  CreateSipPhoneApplicationJSONTransportProtocolEnum = "TCP"
	CreateSIPPhoneApplicationJSONTransportProtocolEnumTLS  CreateSipPhoneApplicationJSONTransportProtocolEnum = "TLS"
	CreateSIPPhoneApplicationJSONTransportProtocolEnumAuto CreateSipPhoneApplicationJSONTransportProtocolEnum = "AUTO"
)

type CreateSipPhoneApplicationJSONTransportProtocol2Enum string

const (
	CreateSIPPhoneApplicationJSONTransportProtocol2EnumUDP  CreateSipPhoneApplicationJSONTransportProtocol2Enum = "UDP"
	CreateSIPPhoneApplicationJSONTransportProtocol2EnumTCP  CreateSipPhoneApplicationJSONTransportProtocol2Enum = "TCP"
	CreateSIPPhoneApplicationJSONTransportProtocol2EnumTLS  CreateSipPhoneApplicationJSONTransportProtocol2Enum = "TLS"
	CreateSIPPhoneApplicationJSONTransportProtocol2EnumAuto CreateSipPhoneApplicationJSONTransportProtocol2Enum = "AUTO"
)

type CreateSipPhoneApplicationJSONTransportProtocol3Enum string

const (
	CreateSIPPhoneApplicationJSONTransportProtocol3EnumUDP  CreateSipPhoneApplicationJSONTransportProtocol3Enum = "UDP"
	CreateSIPPhoneApplicationJSONTransportProtocol3EnumTCP  CreateSipPhoneApplicationJSONTransportProtocol3Enum = "TCP"
	CreateSIPPhoneApplicationJSONTransportProtocol3EnumTLS  CreateSipPhoneApplicationJSONTransportProtocol3Enum = "TLS"
	CreateSIPPhoneApplicationJSONTransportProtocol3EnumAuto CreateSipPhoneApplicationJSONTransportProtocol3Enum = "AUTO"
)

type CreateSipPhoneApplicationJSON struct {
	AuthorizationName      string                                               `json:"authorization_name"`
	Domain                 string                                               `json:"domain"`
	Password               string                                               `json:"password"`
	ProxyServer            string                                               `json:"proxy_server"`
	ProxyServer2           *string                                              `json:"proxy_server2,omitempty"`
	ProxyServer3           *string                                              `json:"proxy_server3,omitempty"`
	RegisterServer         string                                               `json:"register_server"`
	RegisterServer2        *string                                              `json:"register_server2,omitempty"`
	RegisterServer3        *string                                              `json:"register_server3,omitempty"`
	RegistrationExpireTime *int64                                               `json:"registration_expire_time,omitempty"`
	TransportProtocol      *CreateSipPhoneApplicationJSONTransportProtocolEnum  `json:"transport_protocol,omitempty"`
	TransportProtocol2     *CreateSipPhoneApplicationJSONTransportProtocol2Enum `json:"transport_protocol2,omitempty"`
	TransportProtocol3     *CreateSipPhoneApplicationJSONTransportProtocol3Enum `json:"transport_protocol3,omitempty"`
	UserEmail              string                                               `json:"user_email"`
	UserName               string                                               `json:"user_name"`
	VoiceMail              string                                               `json:"voice_mail"`
}

type CreateSipPhoneMultipartFormDataTransportProtocolEnum string

const (
	CreateSIPPhoneMultipartFormDataTransportProtocolEnumUDP  CreateSipPhoneMultipartFormDataTransportProtocolEnum = "UDP"
	CreateSIPPhoneMultipartFormDataTransportProtocolEnumTCP  CreateSipPhoneMultipartFormDataTransportProtocolEnum = "TCP"
	CreateSIPPhoneMultipartFormDataTransportProtocolEnumTLS  CreateSipPhoneMultipartFormDataTransportProtocolEnum = "TLS"
	CreateSIPPhoneMultipartFormDataTransportProtocolEnumAuto CreateSipPhoneMultipartFormDataTransportProtocolEnum = "AUTO"
)

type CreateSipPhoneMultipartFormDataTransportProtocol2Enum string

const (
	CreateSIPPhoneMultipartFormDataTransportProtocol2EnumUDP  CreateSipPhoneMultipartFormDataTransportProtocol2Enum = "UDP"
	CreateSIPPhoneMultipartFormDataTransportProtocol2EnumTCP  CreateSipPhoneMultipartFormDataTransportProtocol2Enum = "TCP"
	CreateSIPPhoneMultipartFormDataTransportProtocol2EnumTLS  CreateSipPhoneMultipartFormDataTransportProtocol2Enum = "TLS"
	CreateSIPPhoneMultipartFormDataTransportProtocol2EnumAuto CreateSipPhoneMultipartFormDataTransportProtocol2Enum = "AUTO"
)

type CreateSipPhoneMultipartFormDataTransportProtocol3Enum string

const (
	CreateSIPPhoneMultipartFormDataTransportProtocol3EnumUDP  CreateSipPhoneMultipartFormDataTransportProtocol3Enum = "UDP"
	CreateSIPPhoneMultipartFormDataTransportProtocol3EnumTCP  CreateSipPhoneMultipartFormDataTransportProtocol3Enum = "TCP"
	CreateSIPPhoneMultipartFormDataTransportProtocol3EnumTLS  CreateSipPhoneMultipartFormDataTransportProtocol3Enum = "TLS"
	CreateSIPPhoneMultipartFormDataTransportProtocol3EnumAuto CreateSipPhoneMultipartFormDataTransportProtocol3Enum = "AUTO"
)

type CreateSipPhoneMultipartFormData struct {
	AuthorizationName      string                                                 `multipartForm:"name=authorization_name"`
	Domain                 string                                                 `multipartForm:"name=domain"`
	Password               string                                                 `multipartForm:"name=password"`
	ProxyServer            string                                                 `multipartForm:"name=proxy_server"`
	ProxyServer2           *string                                                `multipartForm:"name=proxy_server2"`
	ProxyServer3           *string                                                `multipartForm:"name=proxy_server3"`
	RegisterServer         string                                                 `multipartForm:"name=register_server"`
	RegisterServer2        *string                                                `multipartForm:"name=register_server2"`
	RegisterServer3        *string                                                `multipartForm:"name=register_server3"`
	RegistrationExpireTime *int64                                                 `multipartForm:"name=registration_expire_time"`
	TransportProtocol      *CreateSipPhoneMultipartFormDataTransportProtocolEnum  `multipartForm:"name=transport_protocol"`
	TransportProtocol2     *CreateSipPhoneMultipartFormDataTransportProtocol2Enum `multipartForm:"name=transport_protocol2"`
	TransportProtocol3     *CreateSipPhoneMultipartFormDataTransportProtocol3Enum `multipartForm:"name=transport_protocol3"`
	UserEmail              string                                                 `multipartForm:"name=user_email"`
	UserName               string                                                 `multipartForm:"name=user_name"`
	VoiceMail              string                                                 `multipartForm:"name=voice_mail"`
}

type CreateSipPhoneRequests struct {
	Object  *CreateSipPhoneApplicationJSON   `request:"mediaType=application/json"`
	Object1 *CreateSipPhoneMultipartFormData `request:"mediaType=multipart/form-data"`
}

type CreateSipPhoneSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type CreateSipPhoneRequest struct {
	Request  *CreateSipPhoneRequests
	Security CreateSipPhoneSecurity
}

type CreateSipPhoneResponse struct {
	ContentType string
	StatusCode  int64
}
