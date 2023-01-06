package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSubscribedEventEventNameEnum string

const (
	UpdateSubscribedEventEventNameEnumRefresh            UpdateSubscribedEventEventNameEnum = "REFRESH"
	UpdateSubscribedEventEventNameEnumDataUpdates        UpdateSubscribedEventEventNameEnum = "DATA_UPDATES"
	UpdateSubscribedEventEventNameEnumAutoRefreshUpdates UpdateSubscribedEventEventNameEnum = "AUTO_REFRESH_UPDATES"
)

type UpdateSubscribedEventPathParams struct {
	EventName UpdateSubscribedEventEventNameEnum `pathParam:"style=simple,explode=false,name=eventName"`
}

type UpdateSubscribedEventRequest struct {
	PathParams UpdateSubscribedEventPathParams
	Request    shared.UpdateCobrandNotificationEventRequest `request:"mediaType=application/json"`
}

type UpdateSubscribedEventResponse struct {
	ContentType string
	StatusCode  int64
	YodleeError *shared.YodleeError
}
