package operations

import (
	"openapi/pkg/models/shared"
)

type GetProductRatePlansPathParams struct {
	ProductID string `pathParam:"style=simple,explode=false,name=product_id"`
}

type GetProductRatePlansQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetProductRatePlansHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetProductRatePlansRequest struct {
	PathParams  GetProductRatePlansPathParams
	QueryParams GetProductRatePlansQueryParams
	Headers     GetProductRatePlansHeaders
}

type GetProductRatePlansResponse struct {
	ContentType                 string
	GETProductRatePlansResponse *shared.GetProductRatePlansResponse
	Headers                     map[string][]string
	StatusCode                  int64
}
