package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type DashboardWebinarsTypeEnum string

const (
	DashboardWebinarsTypeEnumPast DashboardWebinarsTypeEnum = "past"
	DashboardWebinarsTypeEnumLive DashboardWebinarsTypeEnum = "live"
)

type DashboardWebinarsQueryParams struct {
	From          time.Time                  `queryParam:"style=form,explode=true,name=from"`
	NextPageToken *string                    `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64                     `queryParam:"style=form,explode=true,name=page_size"`
	To            time.Time                  `queryParam:"style=form,explode=true,name=to"`
	Type          *DashboardWebinarsTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type DashboardWebinarsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type DashboardWebinars200ApplicationJSONWebinarMetricsCustomKeys struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}

// DashboardWebinars200ApplicationJSONWebinarMetrics
// Webinar metric details.
type DashboardWebinars200ApplicationJSONWebinarMetrics struct {
	CustomKeys       []DashboardWebinars200ApplicationJSONWebinarMetricsCustomKeys `json:"custom_keys,omitempty"`
	Dept             *string                                                       `json:"dept,omitempty"`
	Duration         *string                                                       `json:"duration,omitempty"`
	Email            *string                                                       `json:"email,omitempty"`
	EndTime          *time.Time                                                    `json:"end_time,omitempty"`
	Has3rdPartyAudio *bool                                                         `json:"has_3rd_party_audio,omitempty"`
	HasPstn          *bool                                                         `json:"has_pstn,omitempty"`
	HasRecording     *bool                                                         `json:"has_recording,omitempty"`
	HasScreenShare   *bool                                                         `json:"has_screen_share,omitempty"`
	HasSip           *bool                                                         `json:"has_sip,omitempty"`
	HasVideo         *bool                                                         `json:"has_video,omitempty"`
	HasVoip          *bool                                                         `json:"has_voip,omitempty"`
	Host             *string                                                       `json:"host,omitempty"`
	ID               *int64                                                        `json:"id,omitempty"`
	Participants     *int64                                                        `json:"participants,omitempty"`
	StartTime        *time.Time                                                    `json:"start_time,omitempty"`
	Topic            *string                                                       `json:"topic,omitempty"`
	UserType         *string                                                       `json:"user_type,omitempty"`
	UUID             *string                                                       `json:"uuid,omitempty"`
}

// DashboardWebinars200ApplicationJSON
// Pagination object.
type DashboardWebinars200ApplicationJSON struct {
	From          *time.Time                                          `json:"from,omitempty"`
	NextPageToken *string                                             `json:"next_page_token,omitempty"`
	PageCount     *int64                                              `json:"page_count,omitempty"`
	PageSize      *int64                                              `json:"page_size,omitempty"`
	To            *time.Time                                          `json:"to,omitempty"`
	TotalRecords  *int64                                              `json:"total_records,omitempty"`
	Webinars      []DashboardWebinars200ApplicationJSONWebinarMetrics `json:"webinars,omitempty"`
}

type DashboardWebinarsRequest struct {
	QueryParams DashboardWebinarsQueryParams
	Security    DashboardWebinarsSecurity
}

type DashboardWebinarsResponse struct {
	Body                                      []byte
	ContentType                               string
	StatusCode                                int64
	DashboardWebinars200ApplicationJSONObject *DashboardWebinars200ApplicationJSON
}
