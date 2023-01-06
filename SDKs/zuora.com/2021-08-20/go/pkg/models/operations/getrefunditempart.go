package operations

import (
	"openapi/pkg/models/shared"
)

type GetRefundItemPartPathParams struct {
	Itempartid   string `pathParam:"style=simple,explode=false,name=itempartid"`
	RefundID     string `pathParam:"style=simple,explode=false,name=refundId"`
	Refundpartid string `pathParam:"style=simple,explode=false,name=refundpartid"`
}

type GetRefundItemPartHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRefundItemPartRequest struct {
	PathParams GetRefundItemPartPathParams
	Headers    GetRefundItemPartHeaders
}

type GetRefundItemPartResponse struct {
	ContentType           string
	GETRefundItemPartType *shared.GetRefundItemPartType
	Headers               map[string][]string
	StatusCode            int64
}
