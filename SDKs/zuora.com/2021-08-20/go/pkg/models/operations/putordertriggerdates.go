package operations

import (
	"openapi/pkg/models/shared"
)

type PutOrderTriggerDatesPathParams struct {
	OrderNumber string `pathParam:"style=simple,explode=false,name=orderNumber"`
}

type PutOrderTriggerDatesHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutOrderTriggerDatesRequest struct {
	PathParams PutOrderTriggerDatesPathParams
	Headers    PutOrderTriggerDatesHeaders
	Request    shared.PutOrderActionTriggerDatesRequestType `request:"mediaType=application/json"`
}

type PutOrderTriggerDatesResponse struct {
	ContentType                      string
	Headers                          map[string][]string
	PUTOrderTriggerDatesResponseType *shared.PutOrderTriggerDatesResponseType
	StatusCode                       int64
}
