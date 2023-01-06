package operations

import (
	"openapi/pkg/models/shared"
)

type RecordingDeleteOnePathParams struct {
	MeetingID   string `pathParam:"style=simple,explode=false,name=meetingId"`
	RecordingID string `pathParam:"style=simple,explode=false,name=recordingId"`
}

type RecordingDeleteOneActionEnum string

const (
	RecordingDeleteOneActionEnumTrash  RecordingDeleteOneActionEnum = "trash"
	RecordingDeleteOneActionEnumDelete RecordingDeleteOneActionEnum = "delete"
)

type RecordingDeleteOneQueryParams struct {
	Action *RecordingDeleteOneActionEnum `queryParam:"style=form,explode=true,name=action"`
}

type RecordingDeleteOneSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type RecordingDeleteOneRequest struct {
	PathParams  RecordingDeleteOnePathParams
	QueryParams RecordingDeleteOneQueryParams
	Security    RecordingDeleteOneSecurity
}

type RecordingDeleteOneResponse struct {
	ContentType string
	StatusCode  int64
}
