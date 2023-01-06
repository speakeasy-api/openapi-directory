package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ReportOperationLogsCategoryTypeEnum string

const (
	ReportOperationLogsCategoryTypeEnumAll           ReportOperationLogsCategoryTypeEnum = "all"
	ReportOperationLogsCategoryTypeEnumUser          ReportOperationLogsCategoryTypeEnum = "user"
	ReportOperationLogsCategoryTypeEnumUserSettings  ReportOperationLogsCategoryTypeEnum = "user_settings"
	ReportOperationLogsCategoryTypeEnumAccount       ReportOperationLogsCategoryTypeEnum = "account"
	ReportOperationLogsCategoryTypeEnumBilling       ReportOperationLogsCategoryTypeEnum = "billing"
	ReportOperationLogsCategoryTypeEnumIm            ReportOperationLogsCategoryTypeEnum = "im"
	ReportOperationLogsCategoryTypeEnumRecording     ReportOperationLogsCategoryTypeEnum = "recording"
	ReportOperationLogsCategoryTypeEnumPhoneContacts ReportOperationLogsCategoryTypeEnum = "phone_contacts"
	ReportOperationLogsCategoryTypeEnumWebinar       ReportOperationLogsCategoryTypeEnum = "webinar"
	ReportOperationLogsCategoryTypeEnumSubAccount    ReportOperationLogsCategoryTypeEnum = "sub_account"
	ReportOperationLogsCategoryTypeEnumRole          ReportOperationLogsCategoryTypeEnum = "role"
	ReportOperationLogsCategoryTypeEnumZoomRooms     ReportOperationLogsCategoryTypeEnum = "zoom_rooms"
)

type ReportOperationLogsQueryParams struct {
	CategoryType  *ReportOperationLogsCategoryTypeEnum `queryParam:"style=form,explode=true,name=category_type"`
	From          time.Time                            `queryParam:"style=form,explode=true,name=from"`
	NextPageToken *string                              `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64                               `queryParam:"style=form,explode=true,name=page_size"`
	To            time.Time                            `queryParam:"style=form,explode=true,name=to"`
}

type ReportOperationLogsSecurity struct {
	OAuth shared.SchemeOAuth `security:"scheme,type=oauth2"`
}

type ReportOperationLogs200ApplicationJSONOperationLogs struct {
	Action          *string    `json:"action,omitempty"`
	CategoryType    *string    `json:"category_type,omitempty"`
	OperationDetail *string    `json:"operation_detail,omitempty"`
	Operator        *string    `json:"operator,omitempty"`
	Time            *time.Time `json:"time,omitempty"`
}

// ReportOperationLogs200ApplicationJSON
// Pagination object.
type ReportOperationLogs200ApplicationJSON struct {
	OperationLogs []ReportOperationLogs200ApplicationJSONOperationLogs `json:"operation_logs,omitempty"`
}

type ReportOperationLogsRequest struct {
	QueryParams ReportOperationLogsQueryParams
	Security    ReportOperationLogsSecurity
}

type ReportOperationLogsResponse struct {
	Body                                        []byte
	ContentType                                 string
	StatusCode                                  int64
	ReportOperationLogs200ApplicationJSONObject *ReportOperationLogs200ApplicationJSON
}
