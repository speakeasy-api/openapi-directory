package operations

import (
	"openapi/pkg/models/shared"
)

type GetACallQueuePathParams struct {
	CallQueueID string `pathParam:"style=simple,explode=false,name=callQueueId"`
}

type GetACallQueueSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GetACallQueue200ApplicationJSONMembersCommonAreaPhones struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type GetACallQueue200ApplicationJSONMembersUsersLevelEnum string

const (
	GetACallQueue200ApplicationJSONMembersUsersLevelEnumManager GetACallQueue200ApplicationJSONMembersUsersLevelEnum = "manager"
	GetACallQueue200ApplicationJSONMembersUsersLevelEnumUser    GetACallQueue200ApplicationJSONMembersUsersLevelEnum = "user"
)

type GetACallQueue200ApplicationJSONMembersUsers struct {
	ID          *string                                               `json:"id,omitempty"`
	Level       *GetACallQueue200ApplicationJSONMembersUsersLevelEnum `json:"level,omitempty"`
	Name        *string                                               `json:"name,omitempty"`
	ReceiveCall *bool                                                 `json:"receive_call,omitempty"`
}

type GetACallQueue200ApplicationJSONMembers struct {
	CommonAreaPhones []GetACallQueue200ApplicationJSONMembersCommonAreaPhones `json:"common_area_phones,omitempty"`
	Users            []GetACallQueue200ApplicationJSONMembersUsers            `json:"users,omitempty"`
}

type GetACallQueue200ApplicationJSONPhoneNumbersSourceEnum string

const (
	GetACallQueue200ApplicationJSONPhoneNumbersSourceEnumInternal GetACallQueue200ApplicationJSONPhoneNumbersSourceEnum = "internal"
	GetACallQueue200ApplicationJSONPhoneNumbersSourceEnumExternal GetACallQueue200ApplicationJSONPhoneNumbersSourceEnum = "external"
)

type GetACallQueue200ApplicationJSONPhoneNumbers struct {
	ID     *string                                                `json:"id,omitempty"`
	Number *string                                                `json:"number,omitempty"`
	Source *GetACallQueue200ApplicationJSONPhoneNumbersSourceEnum `json:"source,omitempty"`
}

type GetACallQueue200ApplicationJSONSite struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type GetACallQueue200ApplicationJSONStatusEnum string

const (
	GetACallQueue200ApplicationJSONStatusEnumActive   GetACallQueue200ApplicationJSONStatusEnum = "active"
	GetACallQueue200ApplicationJSONStatusEnumInactive GetACallQueue200ApplicationJSONStatusEnum = "inactive"
)

type GetACallQueue200ApplicationJSON struct {
	ExtensionNumber *int64                                        `json:"extension_number,omitempty"`
	ID              *string                                       `json:"id,omitempty"`
	Members         *GetACallQueue200ApplicationJSONMembers       `json:"members,omitempty"`
	Name            *string                                       `json:"name,omitempty"`
	PhoneNumbers    []GetACallQueue200ApplicationJSONPhoneNumbers `json:"phone_numbers,omitempty"`
	Site            *GetACallQueue200ApplicationJSONSite          `json:"site,omitempty"`
	Status          *GetACallQueue200ApplicationJSONStatusEnum    `json:"status,omitempty"`
}

type GetACallQueueRequest struct {
	PathParams GetACallQueuePathParams
	Security   GetACallQueueSecurity
}

type GetACallQueueResponse struct {
	Body                                  []byte
	ContentType                           string
	StatusCode                            int64
	GetACallQueue200ApplicationJSONObject *GetACallQueue200ApplicationJSON
}
