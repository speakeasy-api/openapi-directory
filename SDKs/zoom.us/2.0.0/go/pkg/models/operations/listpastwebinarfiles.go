package operations

import (
	"openapi/pkg/models/shared"
)

type ListPastWebinarFilesPathParams struct {
	WebinarID string `pathParam:"style=simple,explode=false,name=webinarId"`
}

type ListPastWebinarFilesSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ListPastWebinarFiles200ApplicationJSONInMeetingFiles struct {
	DownloadURL *string `json:"download_url,omitempty"`
	FileName    *string `json:"file_name,omitempty"`
	FileSize    *int64  `json:"file_size,omitempty"`
}

type ListPastWebinarFiles200ApplicationJSON struct {
	InMeetingFiles []ListPastWebinarFiles200ApplicationJSONInMeetingFiles `json:"in_meeting_files,omitempty"`
	TotalRecords   *int64                                                 `json:"total_records,omitempty"`
}

type ListPastWebinarFilesRequest struct {
	PathParams ListPastWebinarFilesPathParams
	Security   ListPastWebinarFilesSecurity
}

type ListPastWebinarFilesResponse struct {
	Body                                         []byte
	ContentType                                  string
	StatusCode                                   int64
	ListPastWebinarFiles200ApplicationJSONObject *ListPastWebinarFiles200ApplicationJSON
}
