package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DashboardMeetingParticipantsPathParams struct {
	MeetingID string `pathParam:"style=simple,explode=false,name=meetingId"`
}

type DashboardMeetingParticipantsIncludeFieldsEnum string

const (
	DashboardMeetingParticipantsIncludeFieldsEnumRegistrantID DashboardMeetingParticipantsIncludeFieldsEnum = "registrant_id"
)

type DashboardMeetingParticipantsTypeEnum string

const (
	DashboardMeetingParticipantsTypeEnumPast    DashboardMeetingParticipantsTypeEnum = "past"
	DashboardMeetingParticipantsTypeEnumPastOne DashboardMeetingParticipantsTypeEnum = "pastOne"
	DashboardMeetingParticipantsTypeEnumLive    DashboardMeetingParticipantsTypeEnum = "live"
)

type DashboardMeetingParticipantsQueryParams struct {
	IncludeFields *DashboardMeetingParticipantsIncludeFieldsEnum `queryParam:"style=form,explode=true,name=include_fields"`
	NextPageToken *string                                        `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64                                         `queryParam:"style=form,explode=true,name=page_size"`
	Type          *DashboardMeetingParticipantsTypeEnum          `queryParam:"style=form,explode=true,name=type"`
}

type DashboardMeetingParticipantsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DashboardMeetingParticipants200ApplicationJSONParticipantsAudioQualityEnum string

const (
	DashboardMeetingParticipants200ApplicationJSONParticipantsAudioQualityEnumUnknown DashboardMeetingParticipants200ApplicationJSONParticipantsAudioQualityEnum = " "
	DashboardMeetingParticipants200ApplicationJSONParticipantsAudioQualityEnumGood    DashboardMeetingParticipants200ApplicationJSONParticipantsAudioQualityEnum = "good"
	DashboardMeetingParticipants200ApplicationJSONParticipantsAudioQualityEnumFair    DashboardMeetingParticipants200ApplicationJSONParticipantsAudioQualityEnum = "fair"
	DashboardMeetingParticipants200ApplicationJSONParticipantsAudioQualityEnumPoor    DashboardMeetingParticipants200ApplicationJSONParticipantsAudioQualityEnum = "poor"
	DashboardMeetingParticipants200ApplicationJSONParticipantsAudioQualityEnumBad     DashboardMeetingParticipants200ApplicationJSONParticipantsAudioQualityEnum = "bad"
)

type DashboardMeetingParticipants200ApplicationJSONParticipantsNetworkTypeEnum string

const (
	DashboardMeetingParticipants200ApplicationJSONParticipantsNetworkTypeEnumWired           DashboardMeetingParticipants200ApplicationJSONParticipantsNetworkTypeEnum = "Wired"
	DashboardMeetingParticipants200ApplicationJSONParticipantsNetworkTypeEnumWifi            DashboardMeetingParticipants200ApplicationJSONParticipantsNetworkTypeEnum = "Wifi"
	DashboardMeetingParticipants200ApplicationJSONParticipantsNetworkTypeEnumPpp             DashboardMeetingParticipants200ApplicationJSONParticipantsNetworkTypeEnum = "PPP"
	DashboardMeetingParticipants200ApplicationJSONParticipantsNetworkTypeEnumCellular3GAnd4G DashboardMeetingParticipants200ApplicationJSONParticipantsNetworkTypeEnum = "Cellular (3G and 4G)"
	DashboardMeetingParticipants200ApplicationJSONParticipantsNetworkTypeEnumOthers          DashboardMeetingParticipants200ApplicationJSONParticipantsNetworkTypeEnum = "Others"
)

type DashboardMeetingParticipants200ApplicationJSONParticipantsScreenShareQualityEnum string

const (
	DashboardMeetingParticipants200ApplicationJSONParticipantsScreenShareQualityEnumUnknown DashboardMeetingParticipants200ApplicationJSONParticipantsScreenShareQualityEnum = " "
	DashboardMeetingParticipants200ApplicationJSONParticipantsScreenShareQualityEnumGood    DashboardMeetingParticipants200ApplicationJSONParticipantsScreenShareQualityEnum = "good"
	DashboardMeetingParticipants200ApplicationJSONParticipantsScreenShareQualityEnumFair    DashboardMeetingParticipants200ApplicationJSONParticipantsScreenShareQualityEnum = "fair"
	DashboardMeetingParticipants200ApplicationJSONParticipantsScreenShareQualityEnumPoor    DashboardMeetingParticipants200ApplicationJSONParticipantsScreenShareQualityEnum = "poor"
	DashboardMeetingParticipants200ApplicationJSONParticipantsScreenShareQualityEnumBad     DashboardMeetingParticipants200ApplicationJSONParticipantsScreenShareQualityEnum = "bad"
)

type DashboardMeetingParticipants200ApplicationJSONParticipantsStatusEnum string

const (
	DashboardMeetingParticipants200ApplicationJSONParticipantsStatusEnumInMeeting     DashboardMeetingParticipants200ApplicationJSONParticipantsStatusEnum = "in_meeting"
	DashboardMeetingParticipants200ApplicationJSONParticipantsStatusEnumInWaitingRoom DashboardMeetingParticipants200ApplicationJSONParticipantsStatusEnum = "in_waiting_room"
)

type DashboardMeetingParticipants200ApplicationJSONParticipantsVideoQualityEnum string

const (
	DashboardMeetingParticipants200ApplicationJSONParticipantsVideoQualityEnumUnknown DashboardMeetingParticipants200ApplicationJSONParticipantsVideoQualityEnum = " "
	DashboardMeetingParticipants200ApplicationJSONParticipantsVideoQualityEnumGood    DashboardMeetingParticipants200ApplicationJSONParticipantsVideoQualityEnum = "good"
	DashboardMeetingParticipants200ApplicationJSONParticipantsVideoQualityEnumFair    DashboardMeetingParticipants200ApplicationJSONParticipantsVideoQualityEnum = "fair"
	DashboardMeetingParticipants200ApplicationJSONParticipantsVideoQualityEnumPoor    DashboardMeetingParticipants200ApplicationJSONParticipantsVideoQualityEnum = "poor"
	DashboardMeetingParticipants200ApplicationJSONParticipantsVideoQualityEnumBad     DashboardMeetingParticipants200ApplicationJSONParticipantsVideoQualityEnum = "bad"
)

type DashboardMeetingParticipants200ApplicationJSONParticipants struct {
	AudioQuality       *DashboardMeetingParticipants200ApplicationJSONParticipantsAudioQualityEnum       `json:"audio_quality,omitempty"`
	Camera             *string                                                                           `json:"camera,omitempty"`
	ConnectionType     *string                                                                           `json:"connection_type,omitempty"`
	CustomerKey        *string                                                                           `json:"customer_key,omitempty"`
	DataCenter         *string                                                                           `json:"data_center,omitempty"`
	Device             *string                                                                           `json:"device,omitempty"`
	Domain             *string                                                                           `json:"domain,omitempty"`
	Email              *string                                                                           `json:"email,omitempty"`
	HarddiskID         *string                                                                           `json:"harddisk_id,omitempty"`
	ID                 *string                                                                           `json:"id,omitempty"`
	InRoomParticipants *int64                                                                            `json:"in_room_participants,omitempty"`
	IPAddress          *string                                                                           `json:"ip_address,omitempty"`
	JoinTime           *time.Time                                                                        `json:"join_time,omitempty"`
	LeaveReason        *string                                                                           `json:"leave_reason,omitempty"`
	LeaveTime          *time.Time                                                                        `json:"leave_time,omitempty"`
	Location           *string                                                                           `json:"location,omitempty"`
	MacAddr            *string                                                                           `json:"mac_addr,omitempty"`
	Microphone         *string                                                                           `json:"microphone,omitempty"`
	NetworkType        *DashboardMeetingParticipants200ApplicationJSONParticipantsNetworkTypeEnum        `json:"network_type,omitempty"`
	PcName             *string                                                                           `json:"pc_name,omitempty"`
	Recording          *bool                                                                             `json:"recording,omitempty"`
	RegistrantID       *string                                                                           `json:"registrant_id,omitempty"`
	ScreenShareQuality *DashboardMeetingParticipants200ApplicationJSONParticipantsScreenShareQualityEnum `json:"screen_share_quality,omitempty"`
	ShareApplication   *bool                                                                             `json:"share_application,omitempty"`
	ShareDesktop       *bool                                                                             `json:"share_desktop,omitempty"`
	ShareWhiteboard    *bool                                                                             `json:"share_whiteboard,omitempty"`
	Speaker            *string                                                                           `json:"speaker,omitempty"`
	Status             *DashboardMeetingParticipants200ApplicationJSONParticipantsStatusEnum             `json:"status,omitempty"`
	UserID             *string                                                                           `json:"user_id,omitempty"`
	UserName           *string                                                                           `json:"user_name,omitempty"`
	Version            *string                                                                           `json:"version,omitempty"`
	VideoQuality       *DashboardMeetingParticipants200ApplicationJSONParticipantsVideoQualityEnum       `json:"video_quality,omitempty"`
}

// DashboardMeetingParticipants200ApplicationJSON
// Pagination object.
type DashboardMeetingParticipants200ApplicationJSON struct {
	NextPageToken *string                                                      `json:"next_page_token,omitempty"`
	PageCount     *int64                                                       `json:"page_count,omitempty"`
	PageSize      *int64                                                       `json:"page_size,omitempty"`
	Participants  []DashboardMeetingParticipants200ApplicationJSONParticipants `json:"participants,omitempty"`
	TotalRecords  *int64                                                       `json:"total_records,omitempty"`
}

type DashboardMeetingParticipantsRequest struct {
	PathParams  DashboardMeetingParticipantsPathParams
	QueryParams DashboardMeetingParticipantsQueryParams
	Security    DashboardMeetingParticipantsSecurity
}

type DashboardMeetingParticipantsResponse struct {
	Body                                                 []byte
	ContentType                                          string
	StatusCode                                           int64
	DashboardMeetingParticipants200ApplicationJSONObject *DashboardMeetingParticipants200ApplicationJSON
}
