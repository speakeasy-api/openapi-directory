package operations

import (
	"openapi/pkg/models/shared"
)

type PutUpdateNotificationDefinitionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutUpdateNotificationDefinitionHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutUpdateNotificationDefinitionRequest struct {
	PathParams PutUpdateNotificationDefinitionPathParams
	Headers    PutUpdateNotificationDefinitionHeaders
	Request    shared.PutPublicNotificationDefinitionRequest `request:"mediaType=application/json"`
}

type PutUpdateNotificationDefinitionResponse struct {
	ContentType                             string
	ErrorResponse                           *shared.ErrorResponse
	GETPublicNotificationDefinitionResponse *shared.GetPublicNotificationDefinitionResponse
	Headers                                 map[string][]string
	StatusCode                              int64
}
