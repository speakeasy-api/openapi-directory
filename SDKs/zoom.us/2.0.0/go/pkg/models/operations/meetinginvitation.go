package operations

import (
	"openapi/pkg/models/shared"
)

type MeetingInvitationPathParams struct {
	MeetingID int64 `pathParam:"style=simple,explode=false,name=meetingId"`
}

type MeetingInvitationSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// MeetingInvitationMeetingInvitation
// Meeting invitation details.
type MeetingInvitationMeetingInvitation struct {
	Invitation *string `json:"invitation,omitempty"`
}

type MeetingInvitationRequest struct {
	PathParams MeetingInvitationPathParams
	Security   MeetingInvitationSecurity
}

type MeetingInvitationResponse struct {
	Body              []byte
	ContentType       string
	MeetingInvitation *MeetingInvitationMeetingInvitation
	StatusCode        int64
}
