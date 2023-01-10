package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type RecordingsListPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type RecordingsListQueryParams struct {
	From          *time.Time `queryParam:"style=form,explode=true,name=from"`
	Mc            *string    `queryParam:"style=form,explode=true,name=mc"`
	NextPageToken *string    `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64     `queryParam:"style=form,explode=true,name=page_size"`
	To            *time.Time `queryParam:"style=form,explode=true,name=to"`
	Trash         *bool      `queryParam:"style=form,explode=true,name=trash"`
	TrashType     *string    `queryParam:"style=form,explode=true,name=trash_type"`
}

type RecordingsListSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type RecordingsListRecordingListRecordingFileListRecordingFilesStatusEnum string

const (
	RecordingsListRecordingListRecordingFileListRecordingFilesStatusEnumCompleted RecordingsListRecordingListRecordingFileListRecordingFilesStatusEnum = "completed"
)

// RecordingsListRecordingListRecordingFileListRecordingFiles
// Recording file object.
type RecordingsListRecordingListRecordingFileListRecordingFiles struct {
	DeletedTime    *string                                                               `json:"deleted_time,omitempty"`
	DownloadURL    *string                                                               `json:"download_url,omitempty"`
	FileSize       *float64                                                              `json:"file_size,omitempty"`
	FileType       *string                                                               `json:"file_type,omitempty"`
	ID             *string                                                               `json:"id,omitempty"`
	MeetingID      *string                                                               `json:"meeting_id,omitempty"`
	PlayURL        *string                                                               `json:"play_url,omitempty"`
	RecordingEnd   *string                                                               `json:"recording_end,omitempty"`
	RecordingStart *string                                                               `json:"recording_start,omitempty"`
	RecordingType  *string                                                               `json:"recording_type,omitempty"`
	Status         *RecordingsListRecordingListRecordingFileListRecordingFilesStatusEnum `json:"status,omitempty"`
}

// RecordingsListRecordingListRecordingFileList
// List of recording file.
type RecordingsListRecordingListRecordingFileList struct {
	AccountID      *string                                                      `json:"account_id,omitempty"`
	Duration       *int64                                                       `json:"duration,omitempty"`
	HostID         *string                                                      `json:"host_id,omitempty"`
	ID             *string                                                      `json:"id,omitempty"`
	RecordingCount *string                                                      `json:"recording_count,omitempty"`
	RecordingFiles []RecordingsListRecordingListRecordingFileListRecordingFiles `json:"recording_files,omitempty"`
	StartTime      *time.Time                                                   `json:"start_time,omitempty"`
	Topic          *string                                                      `json:"topic,omitempty"`
	TotalSize      *string                                                      `json:"total_size,omitempty"`
	Type           *string                                                      `json:"type,omitempty"`
	UUID           *string                                                      `json:"uuid,omitempty"`
}

// RecordingsListRecordingList
// Pagination object.
type RecordingsListRecordingList struct {
	From          *time.Time                                     `json:"from,omitempty"`
	Meetings      []RecordingsListRecordingListRecordingFileList `json:"meetings,omitempty"`
	NextPageToken *string                                        `json:"next_page_token,omitempty"`
	PageCount     *int64                                         `json:"page_count,omitempty"`
	PageSize      *int64                                         `json:"page_size,omitempty"`
	To            *time.Time                                     `json:"to,omitempty"`
	TotalRecords  *int64                                         `json:"total_records,omitempty"`
}

type RecordingsListRequest struct {
	PathParams  RecordingsListPathParams
	QueryParams RecordingsListQueryParams
	Security    RecordingsListSecurity
}

type RecordingsListResponse struct {
	Body          []byte
	ContentType   string
	RecordingList *RecordingsListRecordingList
	StatusCode    int64
}
