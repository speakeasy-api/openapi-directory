package operations

import (
	"openapi/pkg/models/shared"
)

type GetCrsByCrsNumberPathParams struct {
	CrsNumber string `pathParam:"style=simple,explode=false,name=crs-number"`
}

type GetCrsByCrsNumberHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetCrsByCrsNumberRequest struct {
	PathParams GetCrsByCrsNumberPathParams
	Headers    GetCrsByCrsNumberHeaders
}

type GetCrsByCrsNumberResponse struct {
	ContentType           string
	GETChargeRSDetailType *shared.GetChargeRsDetailType
	Headers               map[string][]string
	StatusCode            int64
}
