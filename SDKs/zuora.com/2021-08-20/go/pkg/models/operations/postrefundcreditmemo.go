package operations

type PostRefundCreditMemoPathParams struct {
	CreditmemoID string `pathParam:"style=simple,explode=false,name=creditmemoId"`
}

type PostRefundCreditMemoHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostRefundCreditMemoRequest struct {
	PathParams PostRefundCreditMemoPathParams
	Headers    PostRefundCreditMemoHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PostRefundCreditMemoResponse struct {
	ContentType             string
	GETRefundCreditMemoType map[string]interface{}
	Headers                 map[string][]string
	StatusCode              int64
}
