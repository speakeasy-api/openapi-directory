package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetAccountCloudRecordingPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type GetAccountCloudRecordingQueryParams struct {
	From          *time.Time `queryParam:"style=form,explode=true,name=from"`
	NextPageToken *string    `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64     `queryParam:"style=form,explode=true,name=page_size"`
	To            *time.Time `queryParam:"style=form,explode=true,name=to"`
}

type GetAccountCloudRecordingSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesFileTypeEnum string

const (
	GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesFileTypeEnumMp4        GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesFileTypeEnum = "MP4"
	GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesFileTypeEnumM4A        GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesFileTypeEnum = "M4A"
	GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesFileTypeEnumChat       GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesFileTypeEnum = "CHAT"
	GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesFileTypeEnumTranscript GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesFileTypeEnum = "TRANSCRIPT"
	GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesFileTypeEnumCc         GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesFileTypeEnum = "CC"
	GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesFileTypeEnumCsv        GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesFileTypeEnum = "CSV"
	GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesFileTypeEnumTb         GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesFileTypeEnum = "TB"
)

type GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnum string

const (
	GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnumSharedScreenWithSpeakerViewCc GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnum = "shared_screen_with_speaker_view(CC)"
	GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnumSharedScreenWithSpeakerView   GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnum = "shared_screen_with_speaker_view"
	GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnumSharedScreenWithGalleryView   GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnum = "shared_screen_with_gallery_view"
	GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnumActiveSpeaker                 GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnum = "active_speaker"
	GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnumGalleryView                   GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnum = "gallery_view"
	GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnumSharedScreen                  GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnum = "shared_screen"
	GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnumAudioOnly                     GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnum = "audio_only"
	GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnumAudioTranscript               GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnum = "audio_transcript"
	GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnumChatFile                      GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnum = "chat_file"
	GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnumPoll                          GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnum = "poll"
	GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnumHostVideo                     GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnum = "host_video"
	GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnumClosedCaption                 GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnum = "closed_caption"
	GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnumTimeline                      GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnum = "timeline"
	GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnumThumbnail                     GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnum = "thumbnail"
)

type GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesStatusEnum string

const (
	GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesStatusEnumCompleted  GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesStatusEnum = "completed"
	GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesStatusEnumProcessing GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesStatusEnum = "processing"
)

type GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFiles struct {
	DownloadURL    *string                                                                            `json:"download_url,omitempty"`
	FileSize       *float64                                                                           `json:"file_size,omitempty"`
	FileType       *GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesFileTypeEnum      `json:"file_type,omitempty"`
	ID             *string                                                                            `json:"id,omitempty"`
	MeetingID      *string                                                                            `json:"meeting_id,omitempty"`
	PlayURL        *string                                                                            `json:"play_url,omitempty"`
	RecordingEnd   *string                                                                            `json:"recording_end,omitempty"`
	RecordingStart *string                                                                            `json:"recording_start,omitempty"`
	RecordingType  *GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnum `json:"recording_type,omitempty"`
	Status         *GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesStatusEnum        `json:"status,omitempty"`
}

type GetAccountCloudRecording200ApplicationJSONMeetings struct {
	Duration       *int64                                                             `json:"duration,omitempty"`
	HostID         *string                                                            `json:"host_id,omitempty"`
	ID             *string                                                            `json:"id,omitempty"`
	RecordingCount *int64                                                             `json:"recording_count,omitempty"`
	RecordingFiles []GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFiles `json:"recording_files,omitempty"`
	StartTime      *time.Time                                                         `json:"start_time,omitempty"`
	Topic          *string                                                            `json:"topic,omitempty"`
	TotalSize      *int64                                                             `json:"total_size,omitempty"`
	UUID           *string                                                            `json:"uuid,omitempty"`
}

type GetAccountCloudRecording200ApplicationJSON struct {
	From          *time.Time                                           `json:"from,omitempty"`
	Meetings      []GetAccountCloudRecording200ApplicationJSONMeetings `json:"meetings,omitempty"`
	NextPageToken *string                                              `json:"next_page_token,omitempty"`
	PageSize      *int64                                               `json:"page_size,omitempty"`
	To            *time.Time                                           `json:"to,omitempty"`
	TotalRecords  *int64                                               `json:"total_records,omitempty"`
}

type GetAccountCloudRecordingRequest struct {
	PathParams  GetAccountCloudRecordingPathParams
	QueryParams GetAccountCloudRecordingQueryParams
	Security    GetAccountCloudRecordingSecurity
}

type GetAccountCloudRecordingResponse struct {
	Body                                             []byte
	ContentType                                      string
	StatusCode                                       int64
	GetAccountCloudRecording200ApplicationJSONObject *GetAccountCloudRecording200ApplicationJSON
}
