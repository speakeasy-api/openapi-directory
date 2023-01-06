package operations

import (
	"openapi/pkg/models/shared"
)

type ListPastMeetingFilesPathParams struct {
	MeetingID int64 `pathParam:"style=simple,explode=false,name=meetingId"`
}

type ListPastMeetingFilesSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ListPastMeetingFiles200ApplicationJSONInMeetingFiles struct {
	DownloadURL *string `json:"download_url,omitempty"`
	FileName    *string `json:"file_name,omitempty"`
	FileSize    *int64  `json:"file_size,omitempty"`
}

type ListPastMeetingFiles200ApplicationJSON struct {
	InMeetingFiles []ListPastMeetingFiles200ApplicationJSONInMeetingFiles `json:"in_meeting_files,omitempty"`
	TotalRecords   *int64                                                 `json:"total_records,omitempty"`
}

type ListPastMeetingFilesRequest struct {
	PathParams ListPastMeetingFilesPathParams
	Security   ListPastMeetingFilesSecurity
}

type ListPastMeetingFilesResponse struct {
	Body                                         []byte
	ContentType                                  string
	StatusCode                                   int64
	ListPastMeetingFiles200ApplicationJSONObject *ListPastMeetingFiles200ApplicationJSON
}
