package operations

import (
	"openapi/pkg/models/shared"
)

type PutEventTriggerPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutEventTriggerHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutEventTriggerRequest struct {
	PathParams PutEventTriggerPathParams
	Headers    PutEventTriggerHeaders
	Request    shared.PutEventTriggerRequest `request:"mediaType=application/json"`
}

type PutEventTriggerResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	EventTrigger  *shared.EventTrigger
	Headers       map[string][]string
	StatusCode    int64
}
