package operations

import (
	"openapi/pkg/models/shared"
)

type RecordingGetPathParams struct {
	MeetingID string `pathParam:"style=simple,explode=false,name=meetingId"`
}

type RecordingGetQueryParams struct {
	IncludeFields *string `queryParam:"style=form,explode=true,name=include_fields"`
	TTL           *int64  `queryParam:"style=form,explode=true,name=ttl"`
}

type RecordingGetSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// RecordingGetRecordingFileList
// List of recording file.
type RecordingGetRecordingFileList struct {
	DownloadAccessToken *string `json:"download_access_token,omitempty"`
}

type RecordingGetRequest struct {
	PathParams  RecordingGetPathParams
	QueryParams RecordingGetQueryParams
	Security    RecordingGetSecurity
}

type RecordingGetResponse struct {
	Body              []byte
	ContentType       string
	RecordingFileList *RecordingGetRecordingFileList
	StatusCode        int64
}
