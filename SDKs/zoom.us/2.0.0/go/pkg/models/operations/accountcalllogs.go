package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type AccountCallLogsTimeTypeEnum string

const (
	AccountCallLogsTimeTypeEnumStartTime AccountCallLogsTimeTypeEnum = "startTime"
	AccountCallLogsTimeTypeEnumEndTime   AccountCallLogsTimeTypeEnum = "endTime"
)

type AccountCallLogsQueryParams struct {
	From          *string                      `queryParam:"style=form,explode=true,name=from"`
	NextPageToken *string                      `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64                       `queryParam:"style=form,explode=true,name=page_size"`
	Path          *string                      `queryParam:"style=form,explode=true,name=path"`
	SiteID        *string                      `queryParam:"style=form,explode=true,name=site_id"`
	TimeType      *AccountCallLogsTimeTypeEnum `queryParam:"style=form,explode=true,name=time_type"`
	To            *string                      `queryParam:"style=form,explode=true,name=to"`
	Type          *string                      `queryParam:"style=form,explode=true,name=type"`
}

type AccountCallLogsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type AccountCallLogs200ApplicationJSONCallLogsCallTypeEnum string

const (
	AccountCallLogs200ApplicationJSONCallLogsCallTypeEnumVoip          AccountCallLogs200ApplicationJSONCallLogsCallTypeEnum = "voip"
	AccountCallLogs200ApplicationJSONCallLogsCallTypeEnumPstn          AccountCallLogs200ApplicationJSONCallLogsCallTypeEnum = "pstn"
	AccountCallLogs200ApplicationJSONCallLogsCallTypeEnumTollfree      AccountCallLogs200ApplicationJSONCallLogsCallTypeEnum = "tollfree"
	AccountCallLogs200ApplicationJSONCallLogsCallTypeEnumInternational AccountCallLogs200ApplicationJSONCallLogsCallTypeEnum = "international"
	AccountCallLogs200ApplicationJSONCallLogsCallTypeEnumContactCenter AccountCallLogs200ApplicationJSONCallLogsCallTypeEnum = "contactCenter"
)

type AccountCallLogs200ApplicationJSONCallLogsOwnerTypeEnum string

const (
	AccountCallLogs200ApplicationJSONCallLogsOwnerTypeEnumUser             AccountCallLogs200ApplicationJSONCallLogsOwnerTypeEnum = "user"
	AccountCallLogs200ApplicationJSONCallLogsOwnerTypeEnumCallQueue        AccountCallLogs200ApplicationJSONCallLogsOwnerTypeEnum = "callQueue"
	AccountCallLogs200ApplicationJSONCallLogsOwnerTypeEnumAutoReceptionist AccountCallLogs200ApplicationJSONCallLogsOwnerTypeEnum = "autoReceptionist"
	AccountCallLogs200ApplicationJSONCallLogsOwnerTypeEnumCommonAreaPhone  AccountCallLogs200ApplicationJSONCallLogsOwnerTypeEnum = "commonAreaPhone"
	AccountCallLogs200ApplicationJSONCallLogsOwnerTypeEnumSharedLineGroup  AccountCallLogs200ApplicationJSONCallLogsOwnerTypeEnum = "sharedLineGroup"
)

type AccountCallLogs200ApplicationJSONCallLogsOwner struct {
	ExtensionNumber *int64                                                  `json:"extension_number,omitempty"`
	ID              *string                                                 `json:"id,omitempty"`
	Name            *string                                                 `json:"name,omitempty"`
	Type            *AccountCallLogs200ApplicationJSONCallLogsOwnerTypeEnum `json:"type,omitempty"`
}

type AccountCallLogs200ApplicationJSONCallLogsRecordingTypeEnum string

const (
	AccountCallLogs200ApplicationJSONCallLogsRecordingTypeEnumOne AccountCallLogs200ApplicationJSONCallLogsRecordingTypeEnum = "1"
	AccountCallLogs200ApplicationJSONCallLogsRecordingTypeEnumTwo AccountCallLogs200ApplicationJSONCallLogsRecordingTypeEnum = "2"
)

type AccountCallLogs200ApplicationJSONCallLogsSite struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}

type AccountCallLogs200ApplicationJSONCallLogs struct {
	AnswerStartTime  *time.Time                                                  `json:"answer_start_time,omitempty"`
	CallID           *string                                                     `json:"call_id,omitempty"`
	CallType         *AccountCallLogs200ApplicationJSONCallLogsCallTypeEnum      `json:"call_type,omitempty"`
	CalleeName       *string                                                     `json:"callee_name,omitempty"`
	CalleeNumber     *string                                                     `json:"callee_number,omitempty"`
	CalleeNumberType *string                                                     `json:"callee_number_type,omitempty"`
	CallerName       *string                                                     `json:"caller_name,omitempty"`
	CallerNumber     *string                                                     `json:"caller_number,omitempty"`
	CallerNumberType *string                                                     `json:"caller_number_type,omitempty"`
	Charge           *string                                                     `json:"charge,omitempty"`
	ClientCode       *string                                                     `json:"client_code,omitempty"`
	DateTime         *string                                                     `json:"date_time,omitempty"`
	Direction        *string                                                     `json:"direction,omitempty"`
	Duration         *int64                                                      `json:"duration,omitempty"`
	ID               *string                                                     `json:"id,omitempty"`
	Owner            *AccountCallLogs200ApplicationJSONCallLogsOwner             `json:"owner,omitempty"`
	Path             *string                                                     `json:"path,omitempty"`
	Rate             *string                                                     `json:"rate,omitempty"`
	RecordingID      *string                                                     `json:"recording_id,omitempty"`
	RecordingType    *AccountCallLogs200ApplicationJSONCallLogsRecordingTypeEnum `json:"recording_type,omitempty"`
	Result           *string                                                     `json:"result,omitempty"`
	Site             *AccountCallLogs200ApplicationJSONCallLogsSite              `json:"site,omitempty"`
	UserID           *string                                                     `json:"user_id,omitempty"`
	WaitingTime      *string                                                     `json:"waiting_time,omitempty"`
}

// AccountCallLogs200ApplicationJSON
// Account Call Logs
type AccountCallLogs200ApplicationJSON struct {
	CallLogs      []AccountCallLogs200ApplicationJSONCallLogs `json:"call_logs,omitempty"`
	From          *string                                     `json:"from,omitempty"`
	NextPageToken *string                                     `json:"next_page_token,omitempty"`
	PageCount     *int64                                      `json:"page_count,omitempty"`
	PageSize      *int64                                      `json:"page_size,omitempty"`
	To            *string                                     `json:"to,omitempty"`
	TotalRecords  *int64                                      `json:"total_records,omitempty"`
}

type AccountCallLogsRequest struct {
	QueryParams AccountCallLogsQueryParams
	Security    AccountCallLogsSecurity
}

type AccountCallLogsResponse struct {
	Body                                    []byte
	ContentType                             string
	StatusCode                              int64
	AccountCallLogs200ApplicationJSONObject *AccountCallLogs200ApplicationJSON
}
