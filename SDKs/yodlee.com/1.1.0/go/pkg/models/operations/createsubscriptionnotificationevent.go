package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSubscriptionNotificationEventEventNameEnum string

const (
	CreateSubscriptionNotificationEventEventNameEnumRefresh            CreateSubscriptionNotificationEventEventNameEnum = "REFRESH"
	CreateSubscriptionNotificationEventEventNameEnumDataUpdates        CreateSubscriptionNotificationEventEventNameEnum = "DATA_UPDATES"
	CreateSubscriptionNotificationEventEventNameEnumAutoRefreshUpdates CreateSubscriptionNotificationEventEventNameEnum = "AUTO_REFRESH_UPDATES"
)

type CreateSubscriptionNotificationEventPathParams struct {
	EventName CreateSubscriptionNotificationEventEventNameEnum `pathParam:"style=simple,explode=false,name=eventName"`
}

type CreateSubscriptionNotificationEventRequest struct {
	PathParams CreateSubscriptionNotificationEventPathParams
	Request    shared.CreateConfigsNotificationEventRequest `request:"mediaType=application/json"`
}

type CreateSubscriptionNotificationEventResponse struct {
	ContentType string
	StatusCode  int64
	YodleeError *shared.YodleeError
}
