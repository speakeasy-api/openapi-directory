package operations

import (
	"openapi/pkg/models/shared"
)

type RecordingDeletePathParams struct {
	MeetingID string `pathParam:"style=simple,explode=false,name=meetingId"`
}

type RecordingDeleteActionEnum string

const (
	RecordingDeleteActionEnumTrash  RecordingDeleteActionEnum = "trash"
	RecordingDeleteActionEnumDelete RecordingDeleteActionEnum = "delete"
)

type RecordingDeleteQueryParams struct {
	Action *RecordingDeleteActionEnum `queryParam:"style=form,explode=true,name=action"`
}

type RecordingDeleteSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type RecordingDeleteRequest struct {
	PathParams  RecordingDeletePathParams
	QueryParams RecordingDeleteQueryParams
	Security    RecordingDeleteSecurity
}

type RecordingDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
