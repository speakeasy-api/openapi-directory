package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PostCustomObjectDefinitionsHeaders struct {
	Authorization  string     `header:"style=simple,explode=false,name=Authorization"`
	ZuoraEntityIds *string    `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string    `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *time.Time `header:"style=simple,explode=false,name=Zuora-Version"`
}

type PostCustomObjectDefinitionsRequest struct {
	Headers PostCustomObjectDefinitionsHeaders
	Request shared.PostCustomObjectDefinitionsRequest `request:"mediaType=application/json"`
}

type PostCustomObjectDefinitionsResponse struct {
	CommonErrorResponse                              *shared.CommonErrorResponse
	ContentType                                      string
	GETAllCustomObjectDefinitionsInNamespaceResponse *shared.GetAllCustomObjectDefinitionsInNamespaceResponse
	Headers                                          map[string][]string
	StatusCode                                       int64
}
