package operations

type GetDebitMemoPathParams struct {
	DebitMemoID string `pathParam:"style=simple,explode=false,name=debitMemoId"`
}

type GetDebitMemoHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetDebitMemoRequest struct {
	PathParams GetDebitMemoPathParams
	Headers    GetDebitMemoHeaders
}

type GetDebitMemoResponse struct {
	ContentType      string
	GETDebitMemoType map[string]interface{}
	Headers          map[string][]string
	StatusCode       int64
}
