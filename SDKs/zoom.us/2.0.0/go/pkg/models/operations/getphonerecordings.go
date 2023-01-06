package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetPhoneRecordingsQueryParams struct {
	From          *string `queryParam:"style=form,explode=true,name=from"`
	NextPageToken *string `queryParam:"style=form,explode=true,name=next_page_token"`
	OwnerType     *string `queryParam:"style=form,explode=true,name=owner_type"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
	RecordingType *string `queryParam:"style=form,explode=true,name=recording_type"`
	SiteID        *string `queryParam:"style=form,explode=true,name=site_id"`
	To            *string `queryParam:"style=form,explode=true,name=to"`
}

type GetPhoneRecordingsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type GetPhoneRecordings200ApplicationJSONRecordingsCalleeNumberTypeEnum string

const (
	GetPhoneRecordings200ApplicationJSONRecordingsCalleeNumberTypeEnumOne GetPhoneRecordings200ApplicationJSONRecordingsCalleeNumberTypeEnum = "1"
	GetPhoneRecordings200ApplicationJSONRecordingsCalleeNumberTypeEnumTwo GetPhoneRecordings200ApplicationJSONRecordingsCalleeNumberTypeEnum = "2"
)

type GetPhoneRecordings200ApplicationJSONRecordingsCallerNumberTypeEnum string

const (
	GetPhoneRecordings200ApplicationJSONRecordingsCallerNumberTypeEnumOne GetPhoneRecordings200ApplicationJSONRecordingsCallerNumberTypeEnum = "1"
	GetPhoneRecordings200ApplicationJSONRecordingsCallerNumberTypeEnumTwo GetPhoneRecordings200ApplicationJSONRecordingsCallerNumberTypeEnum = "2"
)

type GetPhoneRecordings200ApplicationJSONRecordingsDirectionEnum string

const (
	GetPhoneRecordings200ApplicationJSONRecordingsDirectionEnumInbound  GetPhoneRecordings200ApplicationJSONRecordingsDirectionEnum = "inbound"
	GetPhoneRecordings200ApplicationJSONRecordingsDirectionEnumOutbound GetPhoneRecordings200ApplicationJSONRecordingsDirectionEnum = "outbound"
)

type GetPhoneRecordings200ApplicationJSONRecordingsOwnerTypeEnum string

const (
	GetPhoneRecordings200ApplicationJSONRecordingsOwnerTypeEnumUser      GetPhoneRecordings200ApplicationJSONRecordingsOwnerTypeEnum = "user"
	GetPhoneRecordings200ApplicationJSONRecordingsOwnerTypeEnumCallQueue GetPhoneRecordings200ApplicationJSONRecordingsOwnerTypeEnum = "call queue"
)

// GetPhoneRecordings200ApplicationJSONRecordingsOwner
// The owner of the recording.
type GetPhoneRecordings200ApplicationJSONRecordingsOwner struct {
	ExtensionNumber *string                                                      `json:"extension_number,omitempty"`
	ID              *string                                                      `json:"id,omitempty"`
	Name            *string                                                      `json:"name,omitempty"`
	Type            *GetPhoneRecordings200ApplicationJSONRecordingsOwnerTypeEnum `json:"type,omitempty"`
}

type GetPhoneRecordings200ApplicationJSONRecordingsSite struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type GetPhoneRecordings200ApplicationJSONRecordings struct {
	CalleeName       *string                                                             `json:"callee_name,omitempty"`
	CalleeNumber     *string                                                             `json:"callee_number,omitempty"`
	CalleeNumberType *GetPhoneRecordings200ApplicationJSONRecordingsCalleeNumberTypeEnum `json:"callee_number_type,omitempty"`
	CallerName       *string                                                             `json:"caller_name,omitempty"`
	CallerNumber     *string                                                             `json:"caller_number,omitempty"`
	CallerNumberType *GetPhoneRecordings200ApplicationJSONRecordingsCallerNumberTypeEnum `json:"caller_number_type,omitempty"`
	DateTime         *time.Time                                                          `json:"date_time,omitempty"`
	Direction        *GetPhoneRecordings200ApplicationJSONRecordingsDirectionEnum        `json:"direction,omitempty"`
	DownloadURL      *string                                                             `json:"download_url,omitempty"`
	Duration         *int64                                                              `json:"duration,omitempty"`
	ID               *string                                                             `json:"id,omitempty"`
	Owner            *GetPhoneRecordings200ApplicationJSONRecordingsOwner                `json:"owner,omitempty"`
	RecordingType    *string                                                             `json:"recording_type,omitempty"`
	Site             *GetPhoneRecordings200ApplicationJSONRecordingsSite                 `json:"site,omitempty"`
}

type GetPhoneRecordings200ApplicationJSON struct {
	NextPageToken *string                                          `json:"next_page_token,omitempty"`
	PageSize      *int64                                           `json:"page_size,omitempty"`
	Recordings    []GetPhoneRecordings200ApplicationJSONRecordings `json:"recordings,omitempty"`
	TotalRecords  *int64                                           `json:"total_records,omitempty"`
}

type GetPhoneRecordingsRequest struct {
	QueryParams GetPhoneRecordingsQueryParams
	Security    GetPhoneRecordingsSecurity
}

type GetPhoneRecordingsResponse struct {
	Body                                       []byte
	ContentType                                string
	StatusCode                                 int64
	GetPhoneRecordings200ApplicationJSONObject *GetPhoneRecordings200ApplicationJSON
	GetPhoneRecordings400ApplicationJSONAny    *interface{}
}
