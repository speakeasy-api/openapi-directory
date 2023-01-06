package operations

type PostCreditMemoFromPrpcHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *string `header:"style=simple,explode=false,name=zuora-version"`
}

type PostCreditMemoFromPrpcRequest struct {
	Headers PostCreditMemoFromPrpcHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostCreditMemoFromPrpcResponse struct {
	ContentType       string
	GETCreditMemoType map[string]interface{}
	Headers           map[string][]string
	StatusCode        int64
}
