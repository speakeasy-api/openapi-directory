package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DashboardWebinarDetailPathParams struct {
	WebinarID string `pathParam:"style=simple,explode=false,name=webinarId"`
}

type DashboardWebinarDetailTypeEnum string

const (
	DashboardWebinarDetailTypeEnumPast DashboardWebinarDetailTypeEnum = "past"
	DashboardWebinarDetailTypeEnumLive DashboardWebinarDetailTypeEnum = "live"
)

type DashboardWebinarDetailQueryParams struct {
	Type *DashboardWebinarDetailTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type DashboardWebinarDetailSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DashboardWebinarDetailWebinarMetricsCustomKeys struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}

// DashboardWebinarDetailWebinarMetrics
// Webinar metric details.
type DashboardWebinarDetailWebinarMetrics struct {
	CustomKeys       []DashboardWebinarDetailWebinarMetricsCustomKeys `json:"custom_keys,omitempty"`
	Dept             *string                                          `json:"dept,omitempty"`
	Duration         *string                                          `json:"duration,omitempty"`
	Email            *string                                          `json:"email,omitempty"`
	EndTime          *time.Time                                       `json:"end_time,omitempty"`
	Has3rdPartyAudio *bool                                            `json:"has_3rd_party_audio,omitempty"`
	HasPstn          *bool                                            `json:"has_pstn,omitempty"`
	HasRecording     *bool                                            `json:"has_recording,omitempty"`
	HasScreenShare   *bool                                            `json:"has_screen_share,omitempty"`
	HasSip           *bool                                            `json:"has_sip,omitempty"`
	HasVideo         *bool                                            `json:"has_video,omitempty"`
	HasVoip          *bool                                            `json:"has_voip,omitempty"`
	Host             *string                                          `json:"host,omitempty"`
	ID               *int64                                           `json:"id,omitempty"`
	Participants     *int64                                           `json:"participants,omitempty"`
	StartTime        *time.Time                                       `json:"start_time,omitempty"`
	Topic            *string                                          `json:"topic,omitempty"`
	UserType         *string                                          `json:"user_type,omitempty"`
	UUID             *string                                          `json:"uuid,omitempty"`
}

type DashboardWebinarDetailRequest struct {
	PathParams  DashboardWebinarDetailPathParams
	QueryParams DashboardWebinarDetailQueryParams
	Security    DashboardWebinarDetailSecurity
}

type DashboardWebinarDetailResponse struct {
	Body           []byte
	ContentType    string
	StatusCode     int64
	WebinarMetrics *DashboardWebinarDetailWebinarMetrics
}
