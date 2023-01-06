package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEntitiesPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteEntitiesHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type DeleteEntitiesRequest struct {
	PathParams DeleteEntitiesPathParams
	Headers    DeleteEntitiesHeaders
}

type DeleteEntitiesResponse struct {
	ContentType             string
	DELETEntityResponseType *shared.DeletEntityResponseType
	Headers                 map[string][]string
	StatusCode              int64
}
