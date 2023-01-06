package operations

import (
	"openapi/pkg/models/shared"
)

type RecordingStatusUpdateOnePathParams struct {
	MeetingID   string `pathParam:"style=simple,explode=false,name=meetingId"`
	RecordingID string `pathParam:"style=simple,explode=false,name=recordingId"`
}

type RecordingStatusUpdateOneRequests struct {
	Any  *interface{} `request:"mediaType=application/json"`
	Any1 *interface{} `request:"mediaType=multipart/form-data"`
}

type RecordingStatusUpdateOneSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type RecordingStatusUpdateOneRequest struct {
	PathParams RecordingStatusUpdateOnePathParams
	Request    RecordingStatusUpdateOneRequests
	Security   RecordingStatusUpdateOneSecurity
}

type RecordingStatusUpdateOneResponse struct {
	ContentType string
	StatusCode  int64
}
