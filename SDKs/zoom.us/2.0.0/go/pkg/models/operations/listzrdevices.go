package operations

import (
	"openapi/pkg/models/shared"
)

type ListZrDevicesPathParams struct {
	RoomID string `pathParam:"style=simple,explode=false,name=roomId"`
}

type ListZrDevicesSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ListZrDevices200ApplicationJSONDevicesDeviceTypeEnum string

const (
	ListZRDevices200ApplicationJSONDevicesDeviceTypeEnumZoomRoomsComputer      ListZrDevices200ApplicationJSONDevicesDeviceTypeEnum = "Zoom Rooms Computer"
	ListZRDevices200ApplicationJSONDevicesDeviceTypeEnumController             ListZrDevices200ApplicationJSONDevicesDeviceTypeEnum = "Controller"
	ListZRDevices200ApplicationJSONDevicesDeviceTypeEnumSchedulingDisplay      ListZrDevices200ApplicationJSONDevicesDeviceTypeEnum = "Scheduling Display"
	ListZRDevices200ApplicationJSONDevicesDeviceTypeEnumZoomRoomsControlSystem ListZrDevices200ApplicationJSONDevicesDeviceTypeEnum = "Zoom Rooms Control System"
	ListZRDevices200ApplicationJSONDevicesDeviceTypeEnumCompanionWhiteboard    ListZrDevices200ApplicationJSONDevicesDeviceTypeEnum = "Companion Whiteboard"
)

type ListZrDevices200ApplicationJSONDevicesStatusEnum string

const (
	ListZRDevices200ApplicationJSONDevicesStatusEnumOnline  ListZrDevices200ApplicationJSONDevicesStatusEnum = "Online"
	ListZRDevices200ApplicationJSONDevicesStatusEnumOffline ListZrDevices200ApplicationJSONDevicesStatusEnum = "Offline"
)

type ListZrDevices200ApplicationJSONDevices struct {
	AppVersion   *string                                               `json:"app_version,omitempty"`
	DeviceSystem *string                                               `json:"device_system,omitempty"`
	DeviceType   *ListZrDevices200ApplicationJSONDevicesDeviceTypeEnum `json:"device_type,omitempty"`
	ID           *string                                               `json:"id,omitempty"`
	RoomName     *string                                               `json:"room_name,omitempty"`
	Status       *ListZrDevices200ApplicationJSONDevicesStatusEnum     `json:"status,omitempty"`
}

type ListZrDevices200ApplicationJSON struct {
	Devices []ListZrDevices200ApplicationJSONDevices `json:"devices,omitempty"`
}

type ListZrDevicesRequest struct {
	PathParams ListZrDevicesPathParams
	Security   ListZrDevicesSecurity
}

type ListZrDevicesResponse struct {
	Body                                  []byte
	ContentType                           string
	StatusCode                            int64
	ListZRDevices200ApplicationJSONObject *ListZrDevices200ApplicationJSON
}
