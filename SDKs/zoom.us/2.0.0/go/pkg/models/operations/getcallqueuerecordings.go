package operations

import (
	"time"
)

type GetCallQueueRecordingsPathParams struct {
	CallQueueID string `pathParam:"style=simple,explode=false,name=callQueueId"`
}

type GetCallQueueRecordingsQueryParams struct {
	From          *time.Time `queryParam:"style=form,explode=true,name=from"`
	NextPageToken *string    `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64     `queryParam:"style=form,explode=true,name=page_size"`
	To            *time.Time `queryParam:"style=form,explode=true,name=to"`
}

type GetCallQueueRecordings200ApplicationJSONRecordings struct {
	CalleeName       *string    `json:"callee_name,omitempty"`
	CalleeNumber     *string    `json:"callee_number,omitempty"`
	CalleeNumberType *string    `json:"callee_number_type,omitempty"`
	CallerName       *string    `json:"caller_name,omitempty"`
	CallerNumber     *string    `json:"caller_number,omitempty"`
	CallerNumberType *string    `json:"caller_number_type,omitempty"`
	DateTime         *time.Time `json:"date_time,omitempty"`
	Direction        *string    `json:"direction,omitempty"`
	DownloadURL      *string    `json:"download_url,omitempty"`
	Duration         *int64     `json:"duration,omitempty"`
	ID               *string    `json:"id,omitempty"`
}

type GetCallQueueRecordings200ApplicationJSON struct {
	From          *string                                              `json:"from,omitempty"`
	NextPageToken *string                                              `json:"next_page_token,omitempty"`
	PageSize      *int64                                               `json:"page_size,omitempty"`
	Recordings    []GetCallQueueRecordings200ApplicationJSONRecordings `json:"recordings,omitempty"`
	To            *string                                              `json:"to,omitempty"`
	TotalRecords  *string                                              `json:"total_records,omitempty"`
}

type GetCallQueueRecordingsRequest struct {
	PathParams  GetCallQueueRecordingsPathParams
	QueryParams GetCallQueueRecordingsQueryParams
}

type GetCallQueueRecordingsResponse struct {
	Body                                           []byte
	ContentType                                    string
	StatusCode                                     int64
	GetCallQueueRecordings200ApplicationJSONObject *GetCallQueueRecordings200ApplicationJSON
}
