package operations

import (
	"openapi/pkg/models/shared"
)

type PostEntitiesHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostEntitiesRequest struct {
	Headers PostEntitiesHeaders
	Request shared.CreateEntityType `request:"mediaType=application/json"`
}

type PostEntitiesResponse struct {
	ContentType              string
	CreateEntityResponseType *shared.CreateEntityResponseType
	Headers                  map[string][]string
	StatusCode               int64
}
