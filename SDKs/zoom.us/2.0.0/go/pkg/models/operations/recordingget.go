package operations

import (
	"openapi/pkg/models/shared"
	"time"
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

type RecordingGetRecordingFileListRecordingFilesStatusEnum string

const (
	RecordingGetRecordingFileListRecordingFilesStatusEnumCompleted RecordingGetRecordingFileListRecordingFilesStatusEnum = "completed"
)

// RecordingGetRecordingFileListRecordingFiles
// Recording file object.
type RecordingGetRecordingFileListRecordingFiles struct {
	DeletedTime    *string                                                `json:"deleted_time,omitempty"`
	DownloadURL    *string                                                `json:"download_url,omitempty"`
	FileSize       *float64                                               `json:"file_size,omitempty"`
	FileType       *string                                                `json:"file_type,omitempty"`
	ID             *string                                                `json:"id,omitempty"`
	MeetingID      *string                                                `json:"meeting_id,omitempty"`
	PlayURL        *string                                                `json:"play_url,omitempty"`
	RecordingEnd   *string                                                `json:"recording_end,omitempty"`
	RecordingStart *string                                                `json:"recording_start,omitempty"`
	RecordingType  *string                                                `json:"recording_type,omitempty"`
	Status         *RecordingGetRecordingFileListRecordingFilesStatusEnum `json:"status,omitempty"`
}

// RecordingGetRecordingFileList
// List of recording file.
type RecordingGetRecordingFileList struct {
	AccountID           *string                                       `json:"account_id,omitempty"`
	DownloadAccessToken *string                                       `json:"download_access_token,omitempty"`
	Duration            *int64                                        `json:"duration,omitempty"`
	HostID              *string                                       `json:"host_id,omitempty"`
	ID                  *string                                       `json:"id,omitempty"`
	RecordingCount      *string                                       `json:"recording_count,omitempty"`
	RecordingFiles      []RecordingGetRecordingFileListRecordingFiles `json:"recording_files,omitempty"`
	StartTime           *time.Time                                    `json:"start_time,omitempty"`
	Topic               *string                                       `json:"topic,omitempty"`
	TotalSize           *string                                       `json:"total_size,omitempty"`
	Type                *string                                       `json:"type,omitempty"`
	UUID                *string                                       `json:"uuid,omitempty"`
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
