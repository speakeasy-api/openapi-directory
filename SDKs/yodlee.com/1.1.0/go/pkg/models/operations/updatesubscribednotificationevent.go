package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSubscribedNotificationEventEventNameEnum string

const (
	UpdateSubscribedNotificationEventEventNameEnumRefresh            UpdateSubscribedNotificationEventEventNameEnum = "REFRESH"
	UpdateSubscribedNotificationEventEventNameEnumDataUpdates        UpdateSubscribedNotificationEventEventNameEnum = "DATA_UPDATES"
	UpdateSubscribedNotificationEventEventNameEnumAutoRefreshUpdates UpdateSubscribedNotificationEventEventNameEnum = "AUTO_REFRESH_UPDATES"
)

type UpdateSubscribedNotificationEventPathParams struct {
	EventName UpdateSubscribedNotificationEventEventNameEnum `pathParam:"style=simple,explode=false,name=eventName"`
}

type UpdateSubscribedNotificationEventRequest struct {
	PathParams UpdateSubscribedNotificationEventPathParams
	Request    shared.UpdateConfigsNotificationEventRequest `request:"mediaType=application/json"`
}

type UpdateSubscribedNotificationEventResponse struct {
	ContentType string
	StatusCode  int64
	YodleeError *shared.YodleeError
}
