package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ReportUsersTypeEnum string

const (
	ReportUsersTypeEnumActive   ReportUsersTypeEnum = "active"
	ReportUsersTypeEnumInactive ReportUsersTypeEnum = "inactive"
)

type ReportUsersQueryParams struct {
	From          time.Time            `queryParam:"style=form,explode=true,name=from"`
	NextPageToken *string              `queryParam:"style=form,explode=true,name=next_page_token"`
	PageNumber    *int64               `queryParam:"style=form,explode=true,name=page_number"`
	PageSize      *int64               `queryParam:"style=form,explode=true,name=page_size"`
	To            time.Time            `queryParam:"style=form,explode=true,name=to"`
	Type          *ReportUsersTypeEnum `queryParam:"style=form,explode=true,name=type"`
}

type ReportUsersSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// ReportUsers200ApplicationJSONUsersCustomAttributes
// Custom attribute(s) that have been assigned to the user.
type ReportUsers200ApplicationJSONUsersCustomAttributes struct {
	Key   *string `json:"key,omitempty"`
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}

type ReportUsers200ApplicationJSONUsers struct {
	CustomAttributes *ReportUsers200ApplicationJSONUsersCustomAttributes `json:"custom_attributes,omitempty"`
	Dept             *string                                             `json:"dept,omitempty"`
	Email            *string                                             `json:"email,omitempty"`
	ID               *string                                             `json:"id,omitempty"`
	MeetingMinutes   *int64                                              `json:"meeting_minutes,omitempty"`
	Meetings         *int64                                              `json:"meetings,omitempty"`
	Participants     *int64                                              `json:"participants,omitempty"`
	Type             *int64                                              `json:"type,omitempty"`
	UserName         *string                                             `json:"user_name,omitempty"`
}

type ReportUsers200ApplicationJSON struct {
	TotalMeetingMinutes *int64                               `json:"total_meeting_minutes,omitempty"`
	TotalMeetings       *int64                               `json:"total_meetings,omitempty"`
	TotalParticipants   *int64                               `json:"total_participants,omitempty"`
	Users               []ReportUsers200ApplicationJSONUsers `json:"users,omitempty"`
}

type ReportUsersRequest struct {
	QueryParams ReportUsersQueryParams
	Security    ReportUsersSecurity
}

type ReportUsersResponse struct {
	Body                                []byte
	ContentType                         string
	StatusCode                          int64
	ReportUsers200ApplicationJSONObject *ReportUsers200ApplicationJSON
}
