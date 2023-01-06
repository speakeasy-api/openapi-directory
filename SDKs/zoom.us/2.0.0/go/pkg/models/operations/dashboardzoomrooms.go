package operations

import (
	"openapi/pkg/models/shared"
)

type DashboardZoomRoomsQueryParams struct {
	NextPageToken *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageNumber    *int64  `queryParam:"style=form,explode=true,name=page_number"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type DashboardZoomRoomsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// DashboardZoomRoomsZoomRoomListZoomRoom
// Zoom room.
type DashboardZoomRoomsZoomRoomListZoomRoom struct {
	AccountType   *string  `json:"account_type,omitempty"`
	CalenderName  *string  `json:"calender_name,omitempty"`
	Camera        *string  `json:"camera,omitempty"`
	DeviceIP      *string  `json:"device_ip,omitempty"`
	Email         *string  `json:"email,omitempty"`
	Health        *string  `json:"health,omitempty"`
	ID            *string  `json:"id,omitempty"`
	Issues        []string `json:"issues,omitempty"`
	LastStartTime *string  `json:"last_start_time,omitempty"`
	Location      *string  `json:"location,omitempty"`
	Microphone    *string  `json:"microphone,omitempty"`
	RoomName      *string  `json:"room_name,omitempty"`
	Speaker       *string  `json:"speaker,omitempty"`
	Status        *string  `json:"status,omitempty"`
}

// DashboardZoomRoomsZoomRoomList
// Pagination Object.
type DashboardZoomRoomsZoomRoomList struct {
	ZoomRooms []DashboardZoomRoomsZoomRoomListZoomRoom `json:"zoom_rooms,omitempty"`
}

type DashboardZoomRoomsRequest struct {
	QueryParams DashboardZoomRoomsQueryParams
	Security    DashboardZoomRoomsSecurity
}

type DashboardZoomRoomsResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	ZoomRoomList *DashboardZoomRoomsZoomRoomList
}
