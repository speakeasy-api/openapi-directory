package operations

import (
	"openapi/pkg/models/shared"
)

type PutCustomFieldsonRevenueItemsByRevenueEventPathParams struct {
	EventNumber string `pathParam:"style=simple,explode=false,name=event-number"`
}

type PutCustomFieldsonRevenueItemsByRevenueEventHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutCustomFieldsonRevenueItemsByRevenueEventRequest struct {
	PathParams PutCustomFieldsonRevenueItemsByRevenueEventPathParams
	Headers    PutCustomFieldsonRevenueItemsByRevenueEventHeaders
	Request    shared.PutEventRiDetailType `request:"mediaType=application/json"`
}

type PutCustomFieldsonRevenueItemsByRevenueEventResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
