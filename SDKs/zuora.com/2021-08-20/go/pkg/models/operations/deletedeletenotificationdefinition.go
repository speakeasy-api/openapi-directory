package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDeleteNotificationDefinitionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteDeleteNotificationDefinitionHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type DeleteDeleteNotificationDefinitionRequest struct {
	PathParams DeleteDeleteNotificationDefinitionPathParams
	Headers    DeleteDeleteNotificationDefinitionHeaders
}

type DeleteDeleteNotificationDefinitionResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	Headers       map[string][]string
	StatusCode    int64
}
