package operations

import (
	"openapi/pkg/models/shared"
)

type GetRefundPartPathParams struct {
	RefundID     string `pathParam:"style=simple,explode=false,name=refundId"`
	Refundpartid string `pathParam:"style=simple,explode=false,name=refundpartid"`
}

type GetRefundPartHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRefundPartRequest struct {
	PathParams GetRefundPartPathParams
	Headers    GetRefundPartHeaders
}

type GetRefundPartResponse struct {
	ContentType            string
	Headers                map[string][]string
	RefundPartResponseType *shared.RefundPartResponseType
	StatusCode             int64
}
