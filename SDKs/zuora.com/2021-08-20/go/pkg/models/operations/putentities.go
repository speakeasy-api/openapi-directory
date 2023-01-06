package operations

import (
	"openapi/pkg/models/shared"
)

type PutEntitiesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutEntitiesHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutEntitiesRequest struct {
	PathParams PutEntitiesPathParams
	Headers    PutEntitiesHeaders
	Request    shared.UpdateEntityType `request:"mediaType=application/json"`
}

type PutEntitiesResponse struct {
	ContentType              string
	Headers                  map[string][]string
	StatusCode               int64
	UpdateEntityResponseType *shared.UpdateEntityResponseType
}
