package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSubscribedEventEventNameEnum string

const (
	DeleteSubscribedEventEventNameEnumRefresh            DeleteSubscribedEventEventNameEnum = "REFRESH"
	DeleteSubscribedEventEventNameEnumDataUpdates        DeleteSubscribedEventEventNameEnum = "DATA_UPDATES"
	DeleteSubscribedEventEventNameEnumAutoRefreshUpdates DeleteSubscribedEventEventNameEnum = "AUTO_REFRESH_UPDATES"
)

type DeleteSubscribedEventPathParams struct {
	EventName DeleteSubscribedEventEventNameEnum `pathParam:"style=simple,explode=false,name=eventName"`
}

type DeleteSubscribedEventRequest struct {
	PathParams DeleteSubscribedEventPathParams
}

type DeleteSubscribedEventResponse struct {
	ContentType string
	StatusCode  int64
	YodleeError *shared.YodleeError
}
