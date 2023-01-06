package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventTriggersQueryParams struct {
	Active        *string `queryParam:"style=form,explode=true,name=active"`
	BaseObject    *string `queryParam:"style=form,explode=true,name=baseObject"`
	EventTypeName *string `queryParam:"style=form,explode=true,name=eventTypeName"`
	Limit         *int64  `queryParam:"style=form,explode=true,name=limit"`
	Start         *int64  `queryParam:"style=form,explode=true,name=start"`
}

type GetEventTriggersHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetEventTriggers200ApplicationJSON struct {
	Data []shared.EventTrigger `json:"data,omitempty"`
	Next *string               `json:"next,omitempty"`
}

type GetEventTriggersRequest struct {
	QueryParams GetEventTriggersQueryParams
	Headers     GetEventTriggersHeaders
}

type GetEventTriggersResponse struct {
	ContentType                              string
	ErrorResponse                            *shared.ErrorResponse
	GETEventTriggers200ApplicationJSONObject *GetEventTriggers200ApplicationJSON
	Headers                                  map[string][]string
	StatusCode                               int64
}
