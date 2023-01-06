package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRefundPathParams struct {
	RefundID string `pathParam:"style=simple,explode=false,name=refundId"`
}

type DeleteRefundHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type DeleteRefundRequest struct {
	PathParams DeleteRefundPathParams
	Headers    DeleteRefundHeaders
}

type DeleteRefundResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
