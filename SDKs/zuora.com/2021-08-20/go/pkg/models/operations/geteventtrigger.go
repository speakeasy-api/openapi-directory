package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventTriggerPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetEventTriggerHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetEventTriggerRequest struct {
	PathParams GetEventTriggerPathParams
	Headers    GetEventTriggerHeaders
}

type GetEventTriggerResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	EventTrigger  *shared.EventTrigger
	Headers       map[string][]string
	StatusCode    int64
}
