package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DashboardZoomRoomPathParams struct {
	ZoomroomID string `pathParam:"style=simple,explode=false,name=zoomroomId"`
}

type DashboardZoomRoomQueryParams struct {
	From          time.Time `queryParam:"style=form,explode=true,name=from"`
	NextPageToken *string   `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64    `queryParam:"style=form,explode=true,name=page_size"`
	To            time.Time `queryParam:"style=form,explode=true,name=to"`
}

type DashboardZoomRoomSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DashboardZoomRoomZoomRoomMeetingMetricsCustomKeys struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}

// DashboardZoomRoomZoomRoomMeetingMetrics
// Meeting metric details.
type DashboardZoomRoomZoomRoomMeetingMetrics struct {
	CustomKeys         []DashboardZoomRoomZoomRoomMeetingMetricsCustomKeys `json:"custom_keys,omitempty"`
	Dept               *string                                             `json:"dept,omitempty"`
	Duration           *string                                             `json:"duration,omitempty"`
	Email              *string                                             `json:"email,omitempty"`
	EndTime            *time.Time                                          `json:"end_time,omitempty"`
	Has3rdPartyAudio   *bool                                               `json:"has_3rd_party_audio,omitempty"`
	HasPstn            *bool                                               `json:"has_pstn,omitempty"`
	HasRecording       *bool                                               `json:"has_recording,omitempty"`
	HasScreenShare     *bool                                               `json:"has_screen_share,omitempty"`
	HasSip             *bool                                               `json:"has_sip,omitempty"`
	HasVideo           *bool                                               `json:"has_video,omitempty"`
	HasVoip            *bool                                               `json:"has_voip,omitempty"`
	Host               *string                                             `json:"host,omitempty"`
	ID                 *int64                                              `json:"id,omitempty"`
	InRoomParticipants *int64                                              `json:"in_room_participants,omitempty"`
	Participants       *int64                                              `json:"participants,omitempty"`
	StartTime          *time.Time                                          `json:"start_time,omitempty"`
	Topic              *string                                             `json:"topic,omitempty"`
	UserType           *string                                             `json:"user_type,omitempty"`
	UUID               *string                                             `json:"uuid,omitempty"`
}

// DashboardZoomRoomZoomRoomPastMeetings
// Pagination object.
type DashboardZoomRoomZoomRoomPastMeetings struct {
	From *time.Time `json:"from,omitempty"`
	To   *time.Time `json:"to,omitempty"`
}

// DashboardZoomRoomZoomRoom
// Zoom room.
type DashboardZoomRoomZoomRoom struct {
	LiveMeeting  *DashboardZoomRoomZoomRoomMeetingMetrics `json:"live_meeting,omitempty"`
	PastMeetings *DashboardZoomRoomZoomRoomPastMeetings   `json:"past_meetings,omitempty"`
}

type DashboardZoomRoomRequest struct {
	PathParams  DashboardZoomRoomPathParams
	QueryParams DashboardZoomRoomQueryParams
	Security    DashboardZoomRoomSecurity
}

type DashboardZoomRoomResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
	ZoomRoom    *DashboardZoomRoomZoomRoom
}
