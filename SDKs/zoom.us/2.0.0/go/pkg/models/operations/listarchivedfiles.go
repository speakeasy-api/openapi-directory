package operations

type ListArchivedFilesQueryDataTypeEnum string

const (
	ListArchivedFilesQueryDataTypeEnumMeetingStartTime    ListArchivedFilesQueryDataTypeEnum = "meeting_start_time"
	ListArchivedFilesQueryDataTypeEnumArchiveCompleteTime ListArchivedFilesQueryDataTypeEnum = "archive_complete_time"
)

type ListArchivedFilesQueryParams struct {
	From          *string                             `queryParam:"style=form,explode=true,name=from"`
	NextPageToken *string                             `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64                              `queryParam:"style=form,explode=true,name=page_size"`
	QueryDataType *ListArchivedFilesQueryDataTypeEnum `queryParam:"style=form,explode=true,name=query_data_type"`
	To            *string                             `queryParam:"style=form,explode=true,name=to"`
}

type ListArchivedFiles200ApplicationJSONMeetingsArchiveFiles struct {
	DownloadURL   *string `json:"download_url,omitempty"`
	FileExtension *string `json:"file_extension,omitempty"`
	FileSize      *int64  `json:"file_size,omitempty"`
	FileType      *string `json:"file_type,omitempty"`
	ID            *string `json:"id,omitempty"`
	RecordingType *string `json:"recording_type,omitempty"`
	Status        *string `json:"status,omitempty"`
}

type ListArchivedFiles200ApplicationJSONMeetings struct {
	ArchiveFiles   []ListArchivedFiles200ApplicationJSONMeetingsArchiveFiles `json:"archive_files,omitempty"`
	Duration       *int64                                                    `json:"duration,omitempty"`
	HostID         *string                                                   `json:"host_id,omitempty"`
	ID             *int64                                                    `json:"id,omitempty"`
	RecordingCount *int64                                                    `json:"recording_count,omitempty"`
	StartTime      *string                                                   `json:"start_time,omitempty"`
	Timezone       *string                                                   `json:"timezone,omitempty"`
	Topic          *string                                                   `json:"topic,omitempty"`
	TotalSize      *int64                                                    `json:"total_size,omitempty"`
	Type           *int64                                                    `json:"type,omitempty"`
	UUID           *string                                                   `json:"uuid,omitempty"`
}

type ListArchivedFiles200ApplicationJSON struct {
	From          *string                                       `json:"from,omitempty"`
	Meetings      []ListArchivedFiles200ApplicationJSONMeetings `json:"meetings,omitempty"`
	NextPageToken *string                                       `json:"next_page_token,omitempty"`
	PageSize      *int64                                        `json:"page_size,omitempty"`
	To            *string                                       `json:"to,omitempty"`
}

type ListArchivedFilesRequest struct {
	QueryParams ListArchivedFilesQueryParams
}

type ListArchivedFilesResponse struct {
	Body                                      []byte
	ContentType                               string
	StatusCode                                int64
	ListArchivedFiles200ApplicationJSONObject *ListArchivedFiles200ApplicationJSON
}
