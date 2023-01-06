package operations

import (
	"openapi/pkg/models/shared"
)

type RecordingStatusUpdatePathParams struct {
	MeetingID string `pathParam:"style=simple,explode=false,name=meetingId"`
}

type RecordingStatusUpdateRequests struct {
	Any  *interface{} `request:"mediaType=application/json"`
	Any1 *interface{} `request:"mediaType=multipart/form-data"`
}

type RecordingStatusUpdateSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type RecordingStatusUpdateRequest struct {
	PathParams RecordingStatusUpdatePathParams
	Request    RecordingStatusUpdateRequests
	Security   RecordingStatusUpdateSecurity
}

type RecordingStatusUpdateResponse struct {
	ContentType string
	StatusCode  int64
}
