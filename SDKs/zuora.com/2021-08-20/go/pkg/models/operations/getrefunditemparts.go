package operations

import (
	"openapi/pkg/models/shared"
)

type GetRefundItemPartsPathParams struct {
	RefundID     string `pathParam:"style=simple,explode=false,name=refundId"`
	Refundpartid string `pathParam:"style=simple,explode=false,name=refundpartid"`
}

type GetRefundItemPartsQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetRefundItemPartsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRefundItemPartsRequest struct {
	PathParams  GetRefundItemPartsPathParams
	QueryParams GetRefundItemPartsQueryParams
	Headers     GetRefundItemPartsHeaders
}

type GetRefundItemPartsResponse struct {
	ContentType                     string
	GETRefundItemPartCollectionType *shared.GetRefundItemPartCollectionType
	Headers                         map[string][]string
	StatusCode                      int64
}
