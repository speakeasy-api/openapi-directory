package operations

type PostDebitMemoFromPrpcHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *string `header:"style=simple,explode=false,name=zuora-version"`
}

type PostDebitMemoFromPrpcRequest struct {
	Headers PostDebitMemoFromPrpcHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostDebitMemoFromPrpcResponse struct {
	ContentType      string
	GETDebitMemoType map[string]interface{}
	Headers          map[string][]string
	StatusCode       int64
}
