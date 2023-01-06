package operations

type GetCreditMemoPathParams struct {
	CreditMemoID string `pathParam:"style=simple,explode=false,name=creditMemoId"`
}

type GetCreditMemoHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetCreditMemoRequest struct {
	PathParams GetCreditMemoPathParams
	Headers    GetCreditMemoHeaders
}

type GetCreditMemoResponse struct {
	ContentType       string
	GETCreditMemoType map[string]interface{}
	Headers           map[string][]string
	StatusCode        int64
}
