package operations

import (
	"openapi/pkg/models/shared"
)

type PostCreateNotificationDefinitionHeaders struct {
	Authorization  string  `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostCreateNotificationDefinitionRequest struct {
	Headers PostCreateNotificationDefinitionHeaders
	Request shared.PostPublicNotificationDefinitionRequest `request:"mediaType=application/json"`
}

type PostCreateNotificationDefinitionResponse struct {
	ContentType                             string
	ErrorResponse                           *shared.ErrorResponse
	GETPublicNotificationDefinitionResponse *shared.GetPublicNotificationDefinitionResponse
	Headers                                 map[string][]string
	StatusCode                              int64
}
