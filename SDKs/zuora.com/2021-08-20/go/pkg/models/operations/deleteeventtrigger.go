package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEventTriggerPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteEventTriggerHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type DeleteEventTriggerRequest struct {
	PathParams DeleteEventTriggerPathParams
	Headers    DeleteEventTriggerHeaders
}

type DeleteEventTriggerResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	Headers       map[string][]string
	StatusCode    int64
}
