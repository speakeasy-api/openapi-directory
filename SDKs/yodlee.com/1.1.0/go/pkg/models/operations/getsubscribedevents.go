package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubscribedEventsEventNameEnum string

const (
	GetSubscribedEventsEventNameEnumRefresh            GetSubscribedEventsEventNameEnum = "REFRESH"
	GetSubscribedEventsEventNameEnumDataUpdates        GetSubscribedEventsEventNameEnum = "DATA_UPDATES"
	GetSubscribedEventsEventNameEnumAutoRefreshUpdates GetSubscribedEventsEventNameEnum = "AUTO_REFRESH_UPDATES"
)

type GetSubscribedEventsQueryParams struct {
	EventName *GetSubscribedEventsEventNameEnum `queryParam:"style=form,explode=true,name=eventName"`
}

type GetSubscribedEventsRequest struct {
	QueryParams GetSubscribedEventsQueryParams
}

type GetSubscribedEventsResponse struct {
	CobrandNotificationResponse *shared.CobrandNotificationResponse
	ContentType                 string
	StatusCode                  int64
}
