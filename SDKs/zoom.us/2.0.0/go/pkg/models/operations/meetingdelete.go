package operations

import (
	"openapi/pkg/models/shared"
)

type MeetingDeletePathParams struct {
	MeetingID int64 `pathParam:"style=simple,explode=false,name=meetingId"`
}

type MeetingDeleteQueryParams struct {
	CancelMeetingReminder *string `queryParam:"style=form,explode=true,name=cancel_meeting_reminder"`
	OccurrenceID          *string `queryParam:"style=form,explode=true,name=occurrence_id"`
	ScheduleForReminder   *bool   `queryParam:"style=form,explode=true,name=schedule_for_reminder"`
}

type MeetingDeleteSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type MeetingDeleteRequest struct {
	PathParams  MeetingDeletePathParams
	QueryParams MeetingDeleteQueryParams
	Security    MeetingDeleteSecurity
}

type MeetingDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
