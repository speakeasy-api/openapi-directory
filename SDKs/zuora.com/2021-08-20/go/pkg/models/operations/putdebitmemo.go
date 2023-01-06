package operations

type PutDebitMemoPathParams struct {
	DebitMemoID string `pathParam:"style=simple,explode=false,name=debitMemoId"`
}

type PutDebitMemoHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutDebitMemoRequest struct {
	PathParams PutDebitMemoPathParams
	Headers    PutDebitMemoHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PutDebitMemoResponse struct {
	ContentType      string
	GETDebitMemoType map[string]interface{}
	Headers          map[string][]string
	StatusCode       int64
}
