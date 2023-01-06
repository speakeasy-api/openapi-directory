package operations

import (
	"time"
)

type GetPsOperationLogsQueryParams struct {
	CategoryType  *string `queryParam:"style=form,explode=true,name=category_type"`
	From          *string `queryParam:"style=form,explode=true,name=from"`
	NextPageToken *string `queryParam:"style=form,explode=true,name=next_page_token"`
	PageSize      *int64  `queryParam:"style=form,explode=true,name=page_size"`
	To            *string `queryParam:"style=form,explode=true,name=to"`
}

type GetPsOperationLogs200ApplicationJSONOperationLogs struct {
	Action          *string    `json:"action,omitempty"`
	CategoryType    *string    `json:"category_type,omitempty"`
	OperationDetail *string    `json:"operation_detail,omitempty"`
	Operator        *string    `json:"operator,omitempty"`
	Time            *time.Time `json:"time,omitempty"`
}

// GetPsOperationLogs200ApplicationJSON
// Pagination object.
type GetPsOperationLogs200ApplicationJSON struct {
	OperationLogs []GetPsOperationLogs200ApplicationJSONOperationLogs `json:"operation_logs,omitempty"`
}

type GetPsOperationLogsRequest struct {
	QueryParams GetPsOperationLogsQueryParams
}

type GetPsOperationLogsResponse struct {
	Body                                       []byte
	ContentType                                string
	StatusCode                                 int64
	GetPSOperationLogs200ApplicationJSONObject *GetPsOperationLogs200ApplicationJSON
}
