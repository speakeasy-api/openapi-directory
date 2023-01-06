package operations

import (
	"openapi/pkg/models/shared"
)

type PostReconcileRefundPathParams struct {
	RefundID string `pathParam:"style=simple,explode=false,name=refund-id"`
}

type PostReconcileRefundHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostReconcileRefundRequest struct {
	PathParams PostReconcileRefundPathParams
	Headers    PostReconcileRefundHeaders
	Request    shared.PostReconcileRefundRequest `request:"mediaType=application/json"`
}

type PostReconcileRefundResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	POSTReconcileRefundResponse *shared.PostReconcileRefundResponse
	StatusCode                  int64
}
