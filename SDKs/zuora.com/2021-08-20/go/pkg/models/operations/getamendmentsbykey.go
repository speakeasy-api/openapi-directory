package operations

import (
	"openapi/pkg/models/shared"
)

type GetAmendmentsByKeyPathParams struct {
	AmendmentKey string `pathParam:"style=simple,explode=false,name=amendment-key"`
}

type GetAmendmentsByKeyHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetAmendmentsByKeyRequest struct {
	PathParams GetAmendmentsByKeyPathParams
	Headers    GetAmendmentsByKeyHeaders
}

type GetAmendmentsByKeyResponse struct {
	ContentType      string
	GETAmendmentType *shared.GetAmendmentType
	Headers          map[string][]string
	StatusCode       int64
}
