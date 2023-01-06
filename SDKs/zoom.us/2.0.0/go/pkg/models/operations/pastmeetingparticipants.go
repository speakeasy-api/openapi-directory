package operations

import (
	"openapi/pkg/models/shared"
)

type PastMeetingParticipantsPathParams struct {
	MeetingUUID string `pathParam:"style=simple,explode=false,name=meetingUUID"`
}

type PastMeetingParticipantsQueryParams struct {
	NextPageToken *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type PastMeetingParticipantsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type PastMeetingParticipants200ApplicationJSONParticipants struct {
	ID        *string `json:"id,omitempty"`
	Name      *string `json:"name,omitempty"`
	UserEmail *string `json:"user_email,omitempty"`
}

// PastMeetingParticipants200ApplicationJSON
// Pagination object.
type PastMeetingParticipants200ApplicationJSON struct {
	Participants []PastMeetingParticipants200ApplicationJSONParticipants `json:"participants,omitempty"`
}

type PastMeetingParticipantsRequest struct {
	PathParams  PastMeetingParticipantsPathParams
	QueryParams PastMeetingParticipantsQueryParams
	Security    PastMeetingParticipantsSecurity
}

type PastMeetingParticipantsResponse struct {
	Body                                            []byte
	ContentType                                     string
	StatusCode                                      int64
	PastMeetingParticipants200ApplicationJSONObject *PastMeetingParticipants200ApplicationJSON
}
