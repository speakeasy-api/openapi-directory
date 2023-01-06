package operations

import (
	"openapi/pkg/models/shared"
)

type GetRSforSubscChargePathParams struct {
	ChargeKey string `pathParam:"style=simple,explode=false,name=charge-key"`
}

type GetRSforSubscChargeQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetRSforSubscChargeHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRSforSubscChargeRequest struct {
	PathParams  GetRSforSubscChargePathParams
	QueryParams GetRSforSubscChargeQueryParams
	Headers     GetRSforSubscChargeHeaders
}

type GetRSforSubscChargeResponse struct {
	ContentType              string
	GETRSDetailsByChargeType *shared.GetrsDetailsByChargeType
	Headers                  map[string][]string
	StatusCode               int64
}
