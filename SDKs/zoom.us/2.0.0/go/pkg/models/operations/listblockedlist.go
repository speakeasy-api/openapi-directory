package operations

import (
	"openapi/pkg/models/shared"
)

type ListBlockedListQueryParams struct {
	NextPageToken *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type ListBlockedListSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ListBlockedList200ApplicationJSONBlockedListBlockTypeEnum string

const (
	ListBlockedList200ApplicationJSONBlockedListBlockTypeEnumInbound  ListBlockedList200ApplicationJSONBlockedListBlockTypeEnum = "inbound"
	ListBlockedList200ApplicationJSONBlockedListBlockTypeEnumOutbound ListBlockedList200ApplicationJSONBlockedListBlockTypeEnum = "outbound"
)

type ListBlockedList200ApplicationJSONBlockedListMatchTypeEnum string

const (
	ListBlockedList200ApplicationJSONBlockedListMatchTypeEnumPhoneNumber ListBlockedList200ApplicationJSONBlockedListMatchTypeEnum = "phoneNumber"
	ListBlockedList200ApplicationJSONBlockedListMatchTypeEnumPrefix      ListBlockedList200ApplicationJSONBlockedListMatchTypeEnum = "prefix"
)

type ListBlockedList200ApplicationJSONBlockedListStatusEnum string

const (
	ListBlockedList200ApplicationJSONBlockedListStatusEnumActive   ListBlockedList200ApplicationJSONBlockedListStatusEnum = "active"
	ListBlockedList200ApplicationJSONBlockedListStatusEnumInactive ListBlockedList200ApplicationJSONBlockedListStatusEnum = "inactive"
)

type ListBlockedList200ApplicationJSONBlockedList struct {
	BlockType   *ListBlockedList200ApplicationJSONBlockedListBlockTypeEnum `json:"block_type,omitempty"`
	Comment     *string                                                    `json:"comment,omitempty"`
	ID          *string                                                    `json:"id,omitempty"`
	MatchType   *ListBlockedList200ApplicationJSONBlockedListMatchTypeEnum `json:"match_type,omitempty"`
	PhoneNumber *string                                                    `json:"phone_number,omitempty"`
	Status      *ListBlockedList200ApplicationJSONBlockedListStatusEnum    `json:"status,omitempty"`
}

type ListBlockedList200ApplicationJSON struct {
	BlockedList   []ListBlockedList200ApplicationJSONBlockedList `json:"blocked_list,omitempty"`
	NextPageToken *string                                        `json:"next_page_token,omitempty"`
	PageSize      *int64                                         `json:"page_size,omitempty"`
	TotalRecords  *int64                                         `json:"total_records,omitempty"`
}

type ListBlockedListRequest struct {
	QueryParams ListBlockedListQueryParams
	Security    ListBlockedListSecurity
}

type ListBlockedListResponse struct {
	Body                                    []byte
	ContentType                             string
	StatusCode                              int64
	ListBlockedList200ApplicationJSONObject *ListBlockedList200ApplicationJSON
}
