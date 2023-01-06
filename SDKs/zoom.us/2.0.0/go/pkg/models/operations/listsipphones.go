package operations

import (
	"openapi/pkg/models/shared"
)

type ListSipPhonesQueryParams struct {
	NextPageToken *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageNumber    *int64  `queryParam:"style=form,explode=true,name=page_number"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
	SearchKey     *string `queryParam:"style=form,explode=true,name=search_key"`
}

type ListSipPhonesSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ListSipPhones200ApplicationJSONPhonesTransportProtocolEnum string

const (
	ListSipPhones200ApplicationJSONPhonesTransportProtocolEnumUDP  ListSipPhones200ApplicationJSONPhonesTransportProtocolEnum = "UDP"
	ListSipPhones200ApplicationJSONPhonesTransportProtocolEnumTCP  ListSipPhones200ApplicationJSONPhonesTransportProtocolEnum = "TCP"
	ListSipPhones200ApplicationJSONPhonesTransportProtocolEnumTLS  ListSipPhones200ApplicationJSONPhonesTransportProtocolEnum = "TLS"
	ListSipPhones200ApplicationJSONPhonesTransportProtocolEnumAuto ListSipPhones200ApplicationJSONPhonesTransportProtocolEnum = "AUTO"
)

type ListSipPhones200ApplicationJSONPhonesTransportProtocol2Enum string

const (
	ListSipPhones200ApplicationJSONPhonesTransportProtocol2EnumUDP  ListSipPhones200ApplicationJSONPhonesTransportProtocol2Enum = "UDP"
	ListSipPhones200ApplicationJSONPhonesTransportProtocol2EnumTCP  ListSipPhones200ApplicationJSONPhonesTransportProtocol2Enum = "TCP"
	ListSipPhones200ApplicationJSONPhonesTransportProtocol2EnumTLS  ListSipPhones200ApplicationJSONPhonesTransportProtocol2Enum = "TLS"
	ListSipPhones200ApplicationJSONPhonesTransportProtocol2EnumAuto ListSipPhones200ApplicationJSONPhonesTransportProtocol2Enum = "AUTO"
)

type ListSipPhones200ApplicationJSONPhonesTransportProtocol3Enum string

const (
	ListSipPhones200ApplicationJSONPhonesTransportProtocol3EnumUDP  ListSipPhones200ApplicationJSONPhonesTransportProtocol3Enum = "UDP"
	ListSipPhones200ApplicationJSONPhonesTransportProtocol3EnumTCP  ListSipPhones200ApplicationJSONPhonesTransportProtocol3Enum = "TCP"
	ListSipPhones200ApplicationJSONPhonesTransportProtocol3EnumTLS  ListSipPhones200ApplicationJSONPhonesTransportProtocol3Enum = "TLS"
	ListSipPhones200ApplicationJSONPhonesTransportProtocol3EnumAuto ListSipPhones200ApplicationJSONPhonesTransportProtocol3Enum = "AUTO"
)

type ListSipPhones200ApplicationJSONPhones struct {
	AuthorizationName      *string                                                      `json:"authorization_name,omitempty"`
	Domain                 *string                                                      `json:"domain,omitempty"`
	ID                     *string                                                      `json:"id,omitempty"`
	Password               *string                                                      `json:"password,omitempty"`
	ProxyServer            *string                                                      `json:"proxy_server,omitempty"`
	ProxyServer2           *string                                                      `json:"proxy_server2,omitempty"`
	ProxyServer3           *string                                                      `json:"proxy_server3,omitempty"`
	RegisterServer         *string                                                      `json:"register_server,omitempty"`
	RegisterServer2        *string                                                      `json:"register_server2,omitempty"`
	RegisterServer3        *string                                                      `json:"register_server3,omitempty"`
	RegistrationExpireTime *int64                                                       `json:"registration_expire_time,omitempty"`
	TransportProtocol      *ListSipPhones200ApplicationJSONPhonesTransportProtocolEnum  `json:"transport_protocol,omitempty"`
	TransportProtocol2     *ListSipPhones200ApplicationJSONPhonesTransportProtocol2Enum `json:"transport_protocol2,omitempty"`
	TransportProtocol3     *ListSipPhones200ApplicationJSONPhonesTransportProtocol3Enum `json:"transport_protocol3,omitempty"`
	UserEmail              *string                                                      `json:"user_email,omitempty"`
	UserName               *string                                                      `json:"user_name,omitempty"`
	VoiceMail              *string                                                      `json:"voice_mail,omitempty"`
}

type ListSipPhones200ApplicationJSON struct {
	NextPageToken *string                                 `json:"next_page_token,omitempty"`
	PageCount     *int64                                  `json:"page_count,omitempty"`
	PageNumber    *int64                                  `json:"page_number,omitempty"`
	PageSize      *int64                                  `json:"page_size,omitempty"`
	Phones        []ListSipPhones200ApplicationJSONPhones `json:"phones,omitempty"`
	TotalRecords  *int64                                  `json:"total_records,omitempty"`
}

type ListSipPhonesRequest struct {
	QueryParams ListSipPhonesQueryParams
	Security    ListSipPhonesSecurity
}

type ListSipPhonesResponse struct {
	Body                                  []byte
	ContentType                           string
	StatusCode                            int64
	ListSipPhones200ApplicationJSONObject *ListSipPhones200ApplicationJSON
}
