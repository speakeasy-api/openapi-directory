package operations

import (
	"openapi/pkg/models/shared"
)

type ListPhoneDevicesTypeEnum string

const (
	ListPhoneDevicesTypeEnumAssigned   ListPhoneDevicesTypeEnum = "assigned"
	ListPhoneDevicesTypeEnumUnassigned ListPhoneDevicesTypeEnum = "unassigned"
)

type ListPhoneDevicesQueryParams struct {
	NextPageToken *string                  `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64                   `queryParam:"style=form,explode=true,name=page_size"`
	Type          ListPhoneDevicesTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type ListPhoneDevicesSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ListPhoneDevices200ApplicationJSONDevicesAssignee struct {
	ExtensionNumber *int64  `json:"extension_number,omitempty"`
	ID              *string `json:"id,omitempty"`
	Name            *string `json:"name,omitempty"`
}

type ListPhoneDevices200ApplicationJSONDevicesSite struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type ListPhoneDevices200ApplicationJSONDevicesStatusEnum string

const (
	ListPhoneDevices200ApplicationJSONDevicesStatusEnumOnline  ListPhoneDevices200ApplicationJSONDevicesStatusEnum = "online"
	ListPhoneDevices200ApplicationJSONDevicesStatusEnumOffline ListPhoneDevices200ApplicationJSONDevicesStatusEnum = "offline"
)

type ListPhoneDevices200ApplicationJSONDevices struct {
	Assignee    *ListPhoneDevices200ApplicationJSONDevicesAssignee   `json:"assignee,omitempty"`
	DeviceType  *string                                              `json:"device_type,omitempty"`
	DisplayName *string                                              `json:"display_name,omitempty"`
	ID          *string                                              `json:"id,omitempty"`
	MacAddress  *string                                              `json:"mac_address,omitempty"`
	Site        *ListPhoneDevices200ApplicationJSONDevicesSite       `json:"site,omitempty"`
	Status      *ListPhoneDevices200ApplicationJSONDevicesStatusEnum `json:"status,omitempty"`
}

type ListPhoneDevices200ApplicationJSON struct {
	Devices       []ListPhoneDevices200ApplicationJSONDevices `json:"devices,omitempty"`
	NextPageToken *string                                     `json:"next_page_token,omitempty"`
	PageSize      *int64                                      `json:"page_size,omitempty"`
	TotalRecords  *string                                     `json:"total_records,omitempty"`
}

type ListPhoneDevicesRequest struct {
	QueryParams ListPhoneDevicesQueryParams
	Security    ListPhoneDevicesSecurity
}

type ListPhoneDevicesResponse struct {
	Body                                     []byte
	ContentType                              string
	StatusCode                               int64
	ListPhoneDevices200ApplicationJSONObject *ListPhoneDevices200ApplicationJSON
}
