package operations

import (
	"openapi/pkg/models/shared"
)

type GetEntitiesUserAccessiblePathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type GetEntitiesUserAccessibleHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetEntitiesUserAccessibleRequest struct {
	PathParams GetEntitiesUserAccessiblePathParams
	Headers    GetEntitiesUserAccessibleHeaders
}

type GetEntitiesUserAccessibleResponse struct {
	ContentType                           string
	GETEntitiesUserAccessibleResponseType *shared.GetEntitiesUserAccessibleResponseType
	Headers                               map[string][]string
	StatusCode                            int64
}
