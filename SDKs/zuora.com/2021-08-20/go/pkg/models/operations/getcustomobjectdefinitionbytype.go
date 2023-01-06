package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetCustomObjectDefinitionByTypePathParams struct {
	Object string `pathParam:"style=simple,explode=false,name=object"`
}

type GetCustomObjectDefinitionByTypeHeaders struct {
	Authorization  string     `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string    `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string    `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *time.Time `header:"style=simple,explode=false,name=Zuora-Version"`
}

type GetCustomObjectDefinitionByTypeRequest struct {
	PathParams GetCustomObjectDefinitionByTypePathParams
	Headers    GetCustomObjectDefinitionByTypeHeaders
}

type GetCustomObjectDefinitionByTypeResponse struct {
	CommonErrorResponse    *shared.CommonErrorResponse
	ContentType            string
	CustomObjectDefinition *shared.CustomObjectDefinition
	Headers                map[string][]string
	StatusCode             int64
}
