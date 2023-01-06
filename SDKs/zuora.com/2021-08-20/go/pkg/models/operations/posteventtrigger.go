package operations

import (
	"openapi/pkg/models/shared"
)

type PostEventTriggerHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostEventTriggerRequest struct {
	Headers PostEventTriggerHeaders
	Request shared.PostEventTriggerRequest `request:"mediaType=application/json"`
}

type PostEventTriggerResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	EventTrigger  *shared.EventTrigger
	Headers       map[string][]string
	StatusCode    int64
}
