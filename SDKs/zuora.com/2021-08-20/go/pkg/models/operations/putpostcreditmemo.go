package operations

type PutPostCreditMemoPathParams struct {
	CreditMemoID string `pathParam:"style=simple,explode=false,name=creditMemoId"`
}

type PutPostCreditMemoHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutPostCreditMemoRequest struct {
	PathParams PutPostCreditMemoPathParams
	Headers    PutPostCreditMemoHeaders
}

type PutPostCreditMemoResponse struct {
	ContentType       string
	GETCreditMemoType map[string]interface{}
	Headers           map[string][]string
	StatusCode        int64
}
