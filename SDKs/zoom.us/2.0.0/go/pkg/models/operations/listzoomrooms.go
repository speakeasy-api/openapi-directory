package operations

import (
	"openapi/pkg/models/shared"
)

type ListZoomRoomsStatusEnum string

const (
	ListZoomRoomsStatusEnumOffline           ListZoomRoomsStatusEnum = "Offline"
	ListZoomRoomsStatusEnumAvailable         ListZoomRoomsStatusEnum = "Available"
	ListZoomRoomsStatusEnumInMeeting         ListZoomRoomsStatusEnum = "InMeeting"
	ListZoomRoomsStatusEnumUnderConstruction ListZoomRoomsStatusEnum = "UnderConstruction"
)

type ListZoomRoomsTypeEnum string

const (
	ListZoomRoomsTypeEnumZoomRoom              ListZoomRoomsTypeEnum = "ZoomRoom"
	ListZoomRoomsTypeEnumSchedulingDisplayOnly ListZoomRoomsTypeEnum = "SchedulingDisplayOnly"
	ListZoomRoomsTypeEnumDigitalSignageOnly    ListZoomRoomsTypeEnum = "DigitalSignageOnly"
)

type ListZoomRoomsQueryParams struct {
	LocationID      *string                  `queryParam:"style=form,explode=true,name=location_id"`
	NextPageToken   *string                  `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize        *int64                   `queryParam:"style=form,explode=true,name=page_size"`
	Status          *ListZoomRoomsStatusEnum `queryParam:"style=form,explode=true,name=status"`
	Type            *ListZoomRoomsTypeEnum   `queryParam:"style=form,explode=true,name=type"`
	UnassignedRooms *bool                    `queryParam:"style=form,explode=true,name=unassigned_rooms"`
}

type ListZoomRoomsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ListZoomRooms200ApplicationJSONRoomsStatusEnum string

const (
	ListZoomRooms200ApplicationJSONRoomsStatusEnumOffline           ListZoomRooms200ApplicationJSONRoomsStatusEnum = "Offline"
	ListZoomRooms200ApplicationJSONRoomsStatusEnumAvailable         ListZoomRooms200ApplicationJSONRoomsStatusEnum = "Available"
	ListZoomRooms200ApplicationJSONRoomsStatusEnumInMeeting         ListZoomRooms200ApplicationJSONRoomsStatusEnum = "InMeeting"
	ListZoomRooms200ApplicationJSONRoomsStatusEnumUnderConstruction ListZoomRooms200ApplicationJSONRoomsStatusEnum = "UnderConstruction"
)

type ListZoomRooms200ApplicationJSONRooms struct {
	ActivationCode *string                                         `json:"activation_code,omitempty"`
	ID             *string                                         `json:"id,omitempty"`
	LocationID     *string                                         `json:"location_id,omitempty"`
	Name           *string                                         `json:"name,omitempty"`
	RoomID         *string                                         `json:"room_id,omitempty"`
	Status         *ListZoomRooms200ApplicationJSONRoomsStatusEnum `json:"status,omitempty"`
}

type ListZoomRooms200ApplicationJSON struct {
	NextPageToken *string                                `json:"next_page_token,omitempty"`
	PageSize      *int64                                 `json:"page_size,omitempty"`
	Rooms         []ListZoomRooms200ApplicationJSONRooms `json:"rooms,omitempty"`
}

type ListZoomRoomsRequest struct {
	QueryParams ListZoomRoomsQueryParams
	Security    ListZoomRoomsSecurity
}

type ListZoomRoomsResponse struct {
	Body                                  []byte
	ContentType                           string
	StatusCode                            int64
	ListZoomRooms200ApplicationJSONObject *ListZoomRooms200ApplicationJSON
}
