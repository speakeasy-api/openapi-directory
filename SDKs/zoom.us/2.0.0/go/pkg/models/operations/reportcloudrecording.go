package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ReportCloudRecordingQueryParams struct {
	From time.Time `queryParam:"style=form,explode=true,name=from"`
	To   time.Time `queryParam:"style=form,explode=true,name=to"`
}

type ReportCloudRecordingSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ReportCloudRecording200ApplicationJSON struct {
	CloudRecordingStorage []interface{} `json:"cloud_recording_storage,omitempty"`
}

type ReportCloudRecordingRequest struct {
	QueryParams ReportCloudRecordingQueryParams
	Security    ReportCloudRecordingSecurity
}

type ReportCloudRecordingResponse struct {
	Body                                         []byte
	ContentType                                  string
	StatusCode                                   int64
	ReportCloudRecording200ApplicationJSONObject *ReportCloudRecording200ApplicationJSON
}
