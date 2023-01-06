package operations

type PutUpdateRefundPathParams struct {
	RefundID string `pathParam:"style=simple,explode=false,name=refundId"`
}

type PutUpdateRefundHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutUpdateRefundRequest struct {
	PathParams PutUpdateRefundPathParams
	Headers    PutUpdateRefundHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PutUpdateRefundResponse struct {
	ContentType   string
	GETRefundType map[string]interface{}
	Headers       map[string][]string
	StatusCode    int64
}
