package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubscribedNotificationEventsEventNameEnum string

const (
	GetSubscribedNotificationEventsEventNameEnumRefresh            GetSubscribedNotificationEventsEventNameEnum = "REFRESH"
	GetSubscribedNotificationEventsEventNameEnumDataUpdates        GetSubscribedNotificationEventsEventNameEnum = "DATA_UPDATES"
	GetSubscribedNotificationEventsEventNameEnumAutoRefreshUpdates GetSubscribedNotificationEventsEventNameEnum = "AUTO_REFRESH_UPDATES"
)

type GetSubscribedNotificationEventsQueryParams struct {
	EventName *GetSubscribedNotificationEventsEventNameEnum `queryParam:"style=form,explode=true,name=eventName"`
}

type GetSubscribedNotificationEventsRequest struct {
	QueryParams GetSubscribedNotificationEventsQueryParams
}

type GetSubscribedNotificationEventsResponse struct {
	ConfigsNotificationResponse *shared.ConfigsNotificationResponse
	ContentType                 string
	StatusCode                  int64
}
