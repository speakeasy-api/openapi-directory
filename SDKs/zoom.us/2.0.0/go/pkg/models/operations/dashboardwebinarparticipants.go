package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DashboardWebinarParticipantsPathParams struct {
	WebinarID string `pathParam:"style=simple,explode=false,name=webinarId"`
}

type DashboardWebinarParticipantsIncludeFieldsEnum string

const (
	DashboardWebinarParticipantsIncludeFieldsEnumRegistrantID DashboardWebinarParticipantsIncludeFieldsEnum = "registrant_id"
)

type DashboardWebinarParticipantsTypeEnum string

const (
	DashboardWebinarParticipantsTypeEnumPast DashboardWebinarParticipantsTypeEnum = "past"
	DashboardWebinarParticipantsTypeEnumLive DashboardWebinarParticipantsTypeEnum = "live"
)

type DashboardWebinarParticipantsQueryParams struct {
	IncludeFields *DashboardWebinarParticipantsIncludeFieldsEnum `queryParam:"style=form,explode=true,name=include_fields"`
	NextPageToken *string                                        `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64                                         `queryParam:"style=form,explode=true,name=page_size"`
	Type          *DashboardWebinarParticipantsTypeEnum          `queryParam:"style=form,explode=true,name=type"`
}

type DashboardWebinarParticipantsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DashboardWebinarParticipants200ApplicationJSONParticipantsAudioQualityEnum string

const (
	DashboardWebinarParticipants200ApplicationJSONParticipantsAudioQualityEnumUnknown DashboardWebinarParticipants200ApplicationJSONParticipantsAudioQualityEnum = " "
	DashboardWebinarParticipants200ApplicationJSONParticipantsAudioQualityEnumGood    DashboardWebinarParticipants200ApplicationJSONParticipantsAudioQualityEnum = "good"
	DashboardWebinarParticipants200ApplicationJSONParticipantsAudioQualityEnumFair    DashboardWebinarParticipants200ApplicationJSONParticipantsAudioQualityEnum = "fair"
	DashboardWebinarParticipants200ApplicationJSONParticipantsAudioQualityEnumPoor    DashboardWebinarParticipants200ApplicationJSONParticipantsAudioQualityEnum = "poor"
	DashboardWebinarParticipants200ApplicationJSONParticipantsAudioQualityEnumBad     DashboardWebinarParticipants200ApplicationJSONParticipantsAudioQualityEnum = "bad"
)

type DashboardWebinarParticipants200ApplicationJSONParticipantsScreenShareQualityEnum string

const (
	DashboardWebinarParticipants200ApplicationJSONParticipantsScreenShareQualityEnumUnknown DashboardWebinarParticipants200ApplicationJSONParticipantsScreenShareQualityEnum = " "
	DashboardWebinarParticipants200ApplicationJSONParticipantsScreenShareQualityEnumGood    DashboardWebinarParticipants200ApplicationJSONParticipantsScreenShareQualityEnum = "good"
	DashboardWebinarParticipants200ApplicationJSONParticipantsScreenShareQualityEnumFair    DashboardWebinarParticipants200ApplicationJSONParticipantsScreenShareQualityEnum = "fair"
	DashboardWebinarParticipants200ApplicationJSONParticipantsScreenShareQualityEnumPoor    DashboardWebinarParticipants200ApplicationJSONParticipantsScreenShareQualityEnum = "poor"
	DashboardWebinarParticipants200ApplicationJSONParticipantsScreenShareQualityEnumBad     DashboardWebinarParticipants200ApplicationJSONParticipantsScreenShareQualityEnum = "bad"
)

type DashboardWebinarParticipants200ApplicationJSONParticipantsVideoQualityEnum string

const (
	DashboardWebinarParticipants200ApplicationJSONParticipantsVideoQualityEnumUnknown DashboardWebinarParticipants200ApplicationJSONParticipantsVideoQualityEnum = " "
	DashboardWebinarParticipants200ApplicationJSONParticipantsVideoQualityEnumGood    DashboardWebinarParticipants200ApplicationJSONParticipantsVideoQualityEnum = "good"
	DashboardWebinarParticipants200ApplicationJSONParticipantsVideoQualityEnumFair    DashboardWebinarParticipants200ApplicationJSONParticipantsVideoQualityEnum = "fair"
	DashboardWebinarParticipants200ApplicationJSONParticipantsVideoQualityEnumPoor    DashboardWebinarParticipants200ApplicationJSONParticipantsVideoQualityEnum = "poor"
	DashboardWebinarParticipants200ApplicationJSONParticipantsVideoQualityEnumBad     DashboardWebinarParticipants200ApplicationJSONParticipantsVideoQualityEnum = "bad"
)

type DashboardWebinarParticipants200ApplicationJSONParticipants struct {
	AudioQuality       *DashboardWebinarParticipants200ApplicationJSONParticipantsAudioQualityEnum       `json:"audio_quality,omitempty"`
	ConnectionType     *string                                                                           `json:"connection_type,omitempty"`
	CustomerKey        *string                                                                           `json:"customer_key,omitempty"`
	DataCenter         *string                                                                           `json:"data_center,omitempty"`
	Device             *string                                                                           `json:"device,omitempty"`
	Domain             *string                                                                           `json:"domain,omitempty"`
	Email              *string                                                                           `json:"email,omitempty"`
	HarddiskID         *string                                                                           `json:"harddisk_id,omitempty"`
	ID                 *string                                                                           `json:"id,omitempty"`
	IPAddress          *string                                                                           `json:"ip_address,omitempty"`
	JoinTime           *time.Time                                                                        `json:"join_time,omitempty"`
	LeaveReason        *string                                                                           `json:"leave_reason,omitempty"`
	LeaveTime          *time.Time                                                                        `json:"leave_time,omitempty"`
	Location           *string                                                                           `json:"location,omitempty"`
	MacAddr            *string                                                                           `json:"mac_addr,omitempty"`
	Microphone         *string                                                                           `json:"microphone,omitempty"`
	NetworkType        *string                                                                           `json:"network_type,omitempty"`
	PcName             *string                                                                           `json:"pc_name,omitempty"`
	Recording          *bool                                                                             `json:"recording,omitempty"`
	RegistrantID       *string                                                                           `json:"registrant_id,omitempty"`
	ScreenShareQuality *DashboardWebinarParticipants200ApplicationJSONParticipantsScreenShareQualityEnum `json:"screen_share_quality,omitempty"`
	ShareApplication   *bool                                                                             `json:"share_application,omitempty"`
	ShareDesktop       *bool                                                                             `json:"share_desktop,omitempty"`
	ShareWhiteboard    *bool                                                                             `json:"share_whiteboard,omitempty"`
	Speaker            *string                                                                           `json:"speaker,omitempty"`
	UserID             *string                                                                           `json:"user_id,omitempty"`
	UserName           *string                                                                           `json:"user_name,omitempty"`
	Version            *string                                                                           `json:"version,omitempty"`
	VideoQuality       *DashboardWebinarParticipants200ApplicationJSONParticipantsVideoQualityEnum       `json:"video_quality,omitempty"`
}

// DashboardWebinarParticipants200ApplicationJSON
// Pagination object.
type DashboardWebinarParticipants200ApplicationJSON struct {
	Participants []DashboardWebinarParticipants200ApplicationJSONParticipants `json:"participants,omitempty"`
}

type DashboardWebinarParticipantsRequest struct {
	PathParams  DashboardWebinarParticipantsPathParams
	QueryParams DashboardWebinarParticipantsQueryParams
	Security    DashboardWebinarParticipantsSecurity
}

type DashboardWebinarParticipantsResponse struct {
	Body                                                 []byte
	ContentType                                          string
	StatusCode                                           int64
	DashboardWebinarParticipants200ApplicationJSONObject *DashboardWebinarParticipants200ApplicationJSON
}
