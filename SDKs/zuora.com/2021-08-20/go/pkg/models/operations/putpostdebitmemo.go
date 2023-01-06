package operations

type PutPostDebitMemoPathParams struct {
	DebitMemoID string `pathParam:"style=simple,explode=false,name=debitMemoId"`
}

type PutPostDebitMemoHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutPostDebitMemoRequest struct {
	PathParams PutPostDebitMemoPathParams
	Headers    PutPostDebitMemoHeaders
}

type PutPostDebitMemoResponse struct {
	ContentType      string
	GETDebitMemoType map[string]interface{}
	Headers          map[string][]string
	StatusCode       int64
}
