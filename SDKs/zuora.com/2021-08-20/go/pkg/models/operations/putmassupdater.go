package operations

import (
	"openapi/pkg/models/shared"
)

type PutMassUpdaterPathParams struct {
	BulkKey string `pathParam:"style=simple,explode=false,name=bulk-key"`
}

type PutMassUpdaterHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutMassUpdaterRequest struct {
	PathParams PutMassUpdaterPathParams
	Headers    PutMassUpdaterHeaders
}

type PutMassUpdaterResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
