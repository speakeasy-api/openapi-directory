package operations

import (
	"time"
)

type DeleteCustomObjectDefinitionByTypePathParams struct {
	Object string `pathParam:"style=simple,explode=false,name=object"`
}

type DeleteCustomObjectDefinitionByTypeHeaders struct {
	Authorization  string     `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string    `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string    `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *time.Time `header:"style=simple,explode=false,name=Zuora-Version"`
}

type DeleteCustomObjectDefinitionByTypeRequest struct {
	PathParams DeleteCustomObjectDefinitionByTypePathParams
	Headers    DeleteCustomObjectDefinitionByTypeHeaders
}

type DeleteCustomObjectDefinitionByTypeResponse struct {
	ContentType                                                   string
	DeleteCustomObjectDefinitionByType200ApplicationJSONURIString *string
	Headers                                                       map[string][]string
	StatusCode                                                    int64
}
