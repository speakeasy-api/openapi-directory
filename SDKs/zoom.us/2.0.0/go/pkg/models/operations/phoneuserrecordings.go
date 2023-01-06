package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PhoneUserRecordingsPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type PhoneUserRecordingsQueryParams struct {
	From          *time.Time `queryParam:"style=form,explode=true,name=from"`
	NextPageToken *string    `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64     `queryParam:"style=form,explode=true,name=page_size"`
	To            time.Time  `queryParam:"style=form,explode=true,name=to"`
}

type PhoneUserRecordingsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type PhoneUserRecordings200ApplicationJSONRecordings struct {
	CalleeName       *string `json:"callee_name,omitempty"`
	CalleeNumber     *string `json:"callee_number,omitempty"`
	CalleeNumberType *string `json:"callee_number_type,omitempty"`
	CallerName       *string `json:"caller_name,omitempty"`
	CallerNumber     *string `json:"caller_number,omitempty"`
	CallerNumberType *string `json:"caller_number_type,omitempty"`
	DateTime         *string `json:"date_time,omitempty"`
	Direction        *string `json:"direction,omitempty"`
	DownloadURL      *string `json:"download_url,omitempty"`
	Duration         *string `json:"duration,omitempty"`
	ID               *string `json:"id,omitempty"`
}

// PhoneUserRecordings200ApplicationJSON
// Phone User Recordings
type PhoneUserRecordings200ApplicationJSON struct {
	From          *time.Time                                        `json:"from,omitempty"`
	NextPageToken *string                                           `json:"next_page_token,omitempty"`
	PageCount     *int64                                            `json:"page_count,omitempty"`
	PageSize      *int64                                            `json:"page_size,omitempty"`
	Recordings    []PhoneUserRecordings200ApplicationJSONRecordings `json:"recordings,omitempty"`
	To            *time.Time                                        `json:"to,omitempty"`
	TotalRecords  *int64                                            `json:"total_records,omitempty"`
}

type PhoneUserRecordingsRequest struct {
	PathParams  PhoneUserRecordingsPathParams
	QueryParams PhoneUserRecordingsQueryParams
	Security    PhoneUserRecordingsSecurity
}

type PhoneUserRecordingsResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	PhoneUserRecordings200ApplicationJSONObject *PhoneUserRecordings200ApplicationJSON
}
