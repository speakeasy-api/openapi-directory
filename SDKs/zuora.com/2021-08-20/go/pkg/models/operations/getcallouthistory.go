package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetCalloutHistoryQueryParams struct {
	EndTime                *time.Time `queryParam:"style=form,explode=true,name=endTime"`
	EventCategory          *string    `queryParam:"style=form,explode=true,name=eventCategory"`
	FailedOnly             *bool      `queryParam:"style=form,explode=true,name=failedOnly"`
	IncludeResponseContent *bool      `queryParam:"style=form,explode=true,name=includeResponseContent"`
	ObjectID               *string    `queryParam:"style=form,explode=true,name=objectId"`
	PageSize               *int64     `queryParam:"style=form,explode=true,name=pageSize"`
	StartTime              *time.Time `queryParam:"style=form,explode=true,name=startTime"`
}

type GetCalloutHistoryHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetCalloutHistoryRequest struct {
	QueryParams GetCalloutHistoryQueryParams
	Headers     GetCalloutHistoryHeaders
}

type GetCalloutHistoryResponse struct {
	ContentType              string
	GETCalloutHistoryVOsType *shared.GetCalloutHistoryVOsType
	Headers                  map[string][]string
	StatusCode               int64
}
