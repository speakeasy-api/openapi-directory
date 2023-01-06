package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DashboardMeetingDetailPathParams struct {
	MeetingID string `pathParam:"style=simple,explode=false,name=meetingId"`
}

type DashboardMeetingDetailTypeEnum string

const (
	DashboardMeetingDetailTypeEnumPast    DashboardMeetingDetailTypeEnum = "past"
	DashboardMeetingDetailTypeEnumPastOne DashboardMeetingDetailTypeEnum = "pastOne"
	DashboardMeetingDetailTypeEnumLive    DashboardMeetingDetailTypeEnum = "live"
)

type DashboardMeetingDetailQueryParams struct {
	Type *DashboardMeetingDetailTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type DashboardMeetingDetailSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DashboardMeetingDetailMeetingMetricsCustomKeys struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}

// DashboardMeetingDetailMeetingMetrics
// Meeting metric details.
type DashboardMeetingDetailMeetingMetrics struct {
	CustomKeys         []DashboardMeetingDetailMeetingMetricsCustomKeys `json:"custom_keys,omitempty"`
	Dept               *string                                          `json:"dept,omitempty"`
	Duration           *string                                          `json:"duration,omitempty"`
	Email              *string                                          `json:"email,omitempty"`
	EndTime            *time.Time                                       `json:"end_time,omitempty"`
	Has3rdPartyAudio   *bool                                            `json:"has_3rd_party_audio,omitempty"`
	HasPstn            *bool                                            `json:"has_pstn,omitempty"`
	HasRecording       *bool                                            `json:"has_recording,omitempty"`
	HasScreenShare     *bool                                            `json:"has_screen_share,omitempty"`
	HasSip             *bool                                            `json:"has_sip,omitempty"`
	HasVideo           *bool                                            `json:"has_video,omitempty"`
	HasVoip            *bool                                            `json:"has_voip,omitempty"`
	Host               *string                                          `json:"host,omitempty"`
	ID                 *int64                                           `json:"id,omitempty"`
	InRoomParticipants *int64                                           `json:"in_room_participants,omitempty"`
	Participants       *int64                                           `json:"participants,omitempty"`
	StartTime          *time.Time                                       `json:"start_time,omitempty"`
	Topic              *string                                          `json:"topic,omitempty"`
	UserType           *string                                          `json:"user_type,omitempty"`
	UUID               *string                                          `json:"uuid,omitempty"`
}

type DashboardMeetingDetailRequest struct {
	PathParams  DashboardMeetingDetailPathParams
	QueryParams DashboardMeetingDetailQueryParams
	Security    DashboardMeetingDetailSecurity
}

type DashboardMeetingDetailResponse struct {
	Body           []byte
	ContentType    string
	MeetingMetrics *DashboardMeetingDetailMeetingMetrics
	StatusCode     int64
}
