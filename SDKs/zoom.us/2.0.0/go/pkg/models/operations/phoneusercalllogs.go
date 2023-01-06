package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PhoneUserCallLogsPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type PhoneUserCallLogsTimeTypeEnum string

const (
	PhoneUserCallLogsTimeTypeEnumStartTime PhoneUserCallLogsTimeTypeEnum = "startTime"
	PhoneUserCallLogsTimeTypeEnumEndTime   PhoneUserCallLogsTimeTypeEnum = "endTime"
)

type PhoneUserCallLogsTypeEnum string

const (
	PhoneUserCallLogsTypeEnumAll    PhoneUserCallLogsTypeEnum = "all"
	PhoneUserCallLogsTypeEnumMissed PhoneUserCallLogsTypeEnum = "missed"
)

type PhoneUserCallLogsQueryParams struct {
	From          time.Time                      `queryParam:"style=form,explode=true,name=from"`
	NextPageToken *string                        `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64                         `queryParam:"style=form,explode=true,name=page_size"`
	PhoneNumber   *string                        `queryParam:"style=form,explode=true,name=phone_number"`
	TimeType      *PhoneUserCallLogsTimeTypeEnum `queryParam:"style=form,explode=true,name=time_type"`
	To            time.Time                      `queryParam:"style=form,explode=true,name=to"`
	Type          *PhoneUserCallLogsTypeEnum     `queryParam:"style=form,explode=true,name=type"`
}

type PhoneUserCallLogsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

// PhoneUserCallLogs200ApplicationJSONCallLogsAcceptedBy
// Indicates who accepted the call.
type PhoneUserCallLogs200ApplicationJSONCallLogsAcceptedBy struct {
	ExtensionNumber *string `json:"extension_number,omitempty"`
	Location        *string `json:"location,omitempty"`
	Name            *string `json:"name,omitempty"`
	NumberType      *string `json:"number_type,omitempty"`
	PhoneNumber     *string `json:"phone_number,omitempty"`
}

// PhoneUserCallLogs200ApplicationJSONCallLogsForwardedBy
// Indicates where the call was forwarded from.
type PhoneUserCallLogs200ApplicationJSONCallLogsForwardedBy struct {
	ExtensionNumber *string `json:"extension_number,omitempty"`
	Location        *string `json:"location,omitempty"`
	Name            *string `json:"name,omitempty"`
	NumberType      *string `json:"number_type,omitempty"`
	PhoneNumber     *string `json:"phone_number,omitempty"`
}

// PhoneUserCallLogs200ApplicationJSONCallLogsForwardedTo
// Indicates who the call was forwarded to.
type PhoneUserCallLogs200ApplicationJSONCallLogsForwardedTo struct {
	ExtensionNumber *string `json:"extension_number,omitempty"`
	Location        *string `json:"location,omitempty"`
	Name            *string `json:"name,omitempty"`
	NumberType      *string `json:"number_type,omitempty"`
	PhoneNumber     *string `json:"phone_number,omitempty"`
}

type PhoneUserCallLogs200ApplicationJSONCallLogsOutgoingBy struct {
	ExtensionNumber *string `json:"extension_number,omitempty"`
	Location        *string `json:"location,omitempty"`
	Name            *string `json:"name,omitempty"`
	NumberType      *string `json:"number_type,omitempty"`
	PhoneNumber     *string `json:"phone_number,omitempty"`
}

type PhoneUserCallLogs200ApplicationJSONCallLogsSite struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type PhoneUserCallLogs200ApplicationJSONCallLogs struct {
	AcceptedBy       *PhoneUserCallLogs200ApplicationJSONCallLogsAcceptedBy  `json:"accepted_by,omitempty"`
	CallID           *string                                                 `json:"call_id,omitempty"`
	CalleeName       *string                                                 `json:"callee_name,omitempty"`
	CalleeNumber     *string                                                 `json:"callee_number,omitempty"`
	CalleeNumberType *string                                                 `json:"callee_number_type,omitempty"`
	CallerName       *string                                                 `json:"caller_name,omitempty"`
	CallerNumber     *string                                                 `json:"caller_number,omitempty"`
	CallerNumberType *string                                                 `json:"caller_number_type,omitempty"`
	Charge           *string                                                 `json:"charge,omitempty"`
	ClientCode       *string                                                 `json:"client_code,omitempty"`
	DateTime         *string                                                 `json:"date_time,omitempty"`
	Direction        *string                                                 `json:"direction,omitempty"`
	Duration         *int64                                                  `json:"duration,omitempty"`
	ForwardedBy      *PhoneUserCallLogs200ApplicationJSONCallLogsForwardedBy `json:"forwarded_by,omitempty"`
	ForwardedTo      *PhoneUserCallLogs200ApplicationJSONCallLogsForwardedTo `json:"forwarded_to,omitempty"`
	HasRecording     *bool                                                   `json:"has_recording,omitempty"`
	HasVoicemail     *bool                                                   `json:"has_voicemail,omitempty"`
	ID               *string                                                 `json:"id,omitempty"`
	OutgoingBy       *PhoneUserCallLogs200ApplicationJSONCallLogsOutgoingBy  `json:"outgoing_by,omitempty"`
	Path             *string                                                 `json:"path,omitempty"`
	Rate             *string                                                 `json:"rate,omitempty"`
	RecordingType    *string                                                 `json:"recording_type,omitempty"`
	Result           *string                                                 `json:"result,omitempty"`
	Site             *PhoneUserCallLogs200ApplicationJSONCallLogsSite        `json:"site,omitempty"`
	UserID           *string                                                 `json:"user_id,omitempty"`
	WaitingTime      *int64                                                  `json:"waiting_time,omitempty"`
}

// PhoneUserCallLogs200ApplicationJSON
// Phone User Call Logs
type PhoneUserCallLogs200ApplicationJSON struct {
	CallLogs      []PhoneUserCallLogs200ApplicationJSONCallLogs `json:"call_logs,omitempty"`
	From          *string                                       `json:"from,omitempty"`
	NextPageToken *string                                       `json:"next_page_token,omitempty"`
	PageCount     *int64                                        `json:"page_count,omitempty"`
	PageSize      *int64                                        `json:"page_size,omitempty"`
	To            *string                                       `json:"to,omitempty"`
	TotalRecords  *int64                                        `json:"total_records,omitempty"`
}

type PhoneUserCallLogsRequest struct {
	PathParams  PhoneUserCallLogsPathParams
	QueryParams PhoneUserCallLogsQueryParams
	Security    PhoneUserCallLogsSecurity
}

type PhoneUserCallLogsResponse struct {
	Body                                      []byte
	ContentType                               string
	StatusCode                                int64
	PhoneUserCallLogs200ApplicationJSONObject *PhoneUserCallLogs200ApplicationJSON
}
