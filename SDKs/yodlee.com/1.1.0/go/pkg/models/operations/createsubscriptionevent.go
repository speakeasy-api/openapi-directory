package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSubscriptionEventEventNameEnum string

const (
	CreateSubscriptionEventEventNameEnumRefresh            CreateSubscriptionEventEventNameEnum = "REFRESH"
	CreateSubscriptionEventEventNameEnumDataUpdates        CreateSubscriptionEventEventNameEnum = "DATA_UPDATES"
	CreateSubscriptionEventEventNameEnumAutoRefreshUpdates CreateSubscriptionEventEventNameEnum = "AUTO_REFRESH_UPDATES"
)

type CreateSubscriptionEventPathParams struct {
	EventName CreateSubscriptionEventEventNameEnum `pathParam:"style=simple,explode=false,name=eventName"`
}

type CreateSubscriptionEventRequest struct {
	PathParams CreateSubscriptionEventPathParams
	Request    shared.CreateCobrandNotificationEventRequest `request:"mediaType=application/json"`
}

type CreateSubscriptionEventResponse struct {
	ContentType string
	StatusCode  int64
	YodleeError *shared.YodleeError
}
