package operations

import (
	"openapi/pkg/models/shared"
)

type ListCallQueuesQueryParams struct {
	NextPageToken *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type ListCallQueuesSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ListCallQueues200ApplicationJSONCallQueuesPhoneNumbersSourceEnum string

const (
	ListCallQueues200ApplicationJSONCallQueuesPhoneNumbersSourceEnumInternal ListCallQueues200ApplicationJSONCallQueuesPhoneNumbersSourceEnum = "internal"
	ListCallQueues200ApplicationJSONCallQueuesPhoneNumbersSourceEnumExternal ListCallQueues200ApplicationJSONCallQueuesPhoneNumbersSourceEnum = "external"
)

type ListCallQueues200ApplicationJSONCallQueuesPhoneNumbers struct {
	ID     *string                                                           `json:"id,omitempty"`
	Number *string                                                           `json:"number,omitempty"`
	Source *ListCallQueues200ApplicationJSONCallQueuesPhoneNumbersSourceEnum `json:"source,omitempty"`
}

type ListCallQueues200ApplicationJSONCallQueuesSite struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type ListCallQueues200ApplicationJSONCallQueuesStatusEnum string

const (
	ListCallQueues200ApplicationJSONCallQueuesStatusEnumActive   ListCallQueues200ApplicationJSONCallQueuesStatusEnum = "active"
	ListCallQueues200ApplicationJSONCallQueuesStatusEnumInactive ListCallQueues200ApplicationJSONCallQueuesStatusEnum = "inactive"
)

type ListCallQueues200ApplicationJSONCallQueues struct {
	ExtensionNumber *int64                                                   `json:"extension_number,omitempty"`
	ID              *string                                                  `json:"id,omitempty"`
	Name            *string                                                  `json:"name,omitempty"`
	PhoneNumbers    []ListCallQueues200ApplicationJSONCallQueuesPhoneNumbers `json:"phone_numbers,omitempty"`
	Site            *ListCallQueues200ApplicationJSONCallQueuesSite          `json:"site,omitempty"`
	Status          *ListCallQueues200ApplicationJSONCallQueuesStatusEnum    `json:"status,omitempty"`
}

type ListCallQueues200ApplicationJSON struct {
	CallQueues    []ListCallQueues200ApplicationJSONCallQueues `json:"call_queues,omitempty"`
	NextPageToken *string                                      `json:"next_page_token,omitempty"`
	PageSize      *int64                                       `json:"page_size,omitempty"`
	TotalRecords  *int64                                       `json:"total_records,omitempty"`
}

type ListCallQueuesRequest struct {
	QueryParams ListCallQueuesQueryParams
	Security    ListCallQueuesSecurity
}

type ListCallQueuesResponse struct {
	Body                                   []byte
	ContentType                            string
	StatusCode                             int64
	ListCallQueues200ApplicationJSONObject *ListCallQueues200ApplicationJSON
}
