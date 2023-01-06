package operations

type GetRefundPathParams struct {
	RefundID string `pathParam:"style=simple,explode=false,name=refundId"`
}

type GetRefundHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRefundRequest struct {
	PathParams GetRefundPathParams
	Headers    GetRefundHeaders
}

type GetRefundResponse struct {
	ContentType   string
	GETRefundType map[string]interface{}
	Headers       map[string][]string
	StatusCode    int64
}
