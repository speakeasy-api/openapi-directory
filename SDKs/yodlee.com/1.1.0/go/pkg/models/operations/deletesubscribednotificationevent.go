package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSubscribedNotificationEventEventNameEnum string

const (
	DeleteSubscribedNotificationEventEventNameEnumRefresh            DeleteSubscribedNotificationEventEventNameEnum = "REFRESH"
	DeleteSubscribedNotificationEventEventNameEnumDataUpdates        DeleteSubscribedNotificationEventEventNameEnum = "DATA_UPDATES"
	DeleteSubscribedNotificationEventEventNameEnumAutoRefreshUpdates DeleteSubscribedNotificationEventEventNameEnum = "AUTO_REFRESH_UPDATES"
)

type DeleteSubscribedNotificationEventPathParams struct {
	EventName DeleteSubscribedNotificationEventEventNameEnum `pathParam:"style=simple,explode=false,name=eventName"`
}

type DeleteSubscribedNotificationEventRequest struct {
	PathParams DeleteSubscribedNotificationEventPathParams
}

type DeleteSubscribedNotificationEventResponse struct {
	ContentType string
	StatusCode  int64
	YodleeError *shared.YodleeError
}
