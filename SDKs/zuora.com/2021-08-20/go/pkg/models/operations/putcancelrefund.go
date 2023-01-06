package operations

type PutCancelRefundPathParams struct {
	RefundID string `pathParam:"style=simple,explode=false,name=refundId"`
}

type PutCancelRefundHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutCancelRefundRequest struct {
	PathParams PutCancelRefundPathParams
	Headers    PutCancelRefundHeaders
}

type PutCancelRefundResponse struct {
	ContentType   string
	GETRefundType map[string]interface{}
	Headers       map[string][]string
	StatusCode    int64
}
