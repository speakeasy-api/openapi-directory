package operations

import (
	"openapi/pkg/models/shared"
)

type GetABlockedListPathParams struct {
	BlockedListID string `pathParam:"style=simple,explode=false,name=blockedListId"`
}

type GetABlockedListSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GetABlockedList200ApplicationJSONBlockTypeEnum string

const (
	GetABlockedList200ApplicationJSONBlockTypeEnumInbound  GetABlockedList200ApplicationJSONBlockTypeEnum = "inbound"
	GetABlockedList200ApplicationJSONBlockTypeEnumOutbound GetABlockedList200ApplicationJSONBlockTypeEnum = "outbound"
)

type GetABlockedList200ApplicationJSONMatchTypeEnum string

const (
	GetABlockedList200ApplicationJSONMatchTypeEnumPhoneNumber GetABlockedList200ApplicationJSONMatchTypeEnum = "phoneNumber"
	GetABlockedList200ApplicationJSONMatchTypeEnumPrefix      GetABlockedList200ApplicationJSONMatchTypeEnum = "prefix"
)

type GetABlockedList200ApplicationJSONStatusEnum string

const (
	GetABlockedList200ApplicationJSONStatusEnumActive   GetABlockedList200ApplicationJSONStatusEnum = "active"
	GetABlockedList200ApplicationJSONStatusEnumInactive GetABlockedList200ApplicationJSONStatusEnum = "inactive"
)

type GetABlockedList200ApplicationJSON struct {
	BlockType   *GetABlockedList200ApplicationJSONBlockTypeEnum `json:"block_type,omitempty"`
	Comment     *string                                         `json:"comment,omitempty"`
	ID          *string                                         `json:"id,omitempty"`
	MatchType   *GetABlockedList200ApplicationJSONMatchTypeEnum `json:"match_type,omitempty"`
	PhoneNumber *string                                         `json:"phone_number,omitempty"`
	Status      *GetABlockedList200ApplicationJSONStatusEnum    `json:"status,omitempty"`
}

type GetABlockedListRequest struct {
	PathParams GetABlockedListPathParams
	Security   GetABlockedListSecurity
}

type GetABlockedListResponse struct {
	Body                                    []byte
	ContentType                             string
	StatusCode                              int64
	GetABlockedList200ApplicationJSONObject *GetABlockedList200ApplicationJSON
}
