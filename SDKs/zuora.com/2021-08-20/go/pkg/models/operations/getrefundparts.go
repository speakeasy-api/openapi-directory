package operations

import (
	"openapi/pkg/models/shared"
)

type GetRefundPartsPathParams struct {
	RefundID string `pathParam:"style=simple,explode=false,name=refundId"`
}

type GetRefundPartsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRefundPartsRequest struct {
	PathParams GetRefundPartsPathParams
	Headers    GetRefundPartsHeaders
}

type GetRefundPartsResponse struct {
	ContentType                 string
	GETRefundPartCollectionType *shared.GetRefundPartCollectionType
	Headers                     map[string][]string
	StatusCode                  int64
}
