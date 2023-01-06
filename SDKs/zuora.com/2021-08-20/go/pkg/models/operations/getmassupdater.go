package operations

import (
	"openapi/pkg/models/shared"
)

type GetMassUpdaterPathParams struct {
	BulkKey string `pathParam:"style=simple,explode=false,name=bulk-key"`
}

type GetMassUpdaterHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetMassUpdaterRequest struct {
	PathParams GetMassUpdaterPathParams
	Headers    GetMassUpdaterHeaders
}

type GetMassUpdaterResponse struct {
	ContentType       string
	GETMassUpdateType *shared.GetMassUpdateType
	Headers           map[string][]string
	StatusCode        int64
}
