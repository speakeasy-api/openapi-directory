package operations

type PutUpdateCreditMemoPathParams struct {
	CreditMemoID string `pathParam:"style=simple,explode=false,name=creditMemoId"`
}

type PutUpdateCreditMemoHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutUpdateCreditMemoRequest struct {
	PathParams PutUpdateCreditMemoPathParams
	Headers    PutUpdateCreditMemoHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PutUpdateCreditMemoResponse struct {
	ContentType       string
	GETCreditMemoType map[string]interface{}
	Headers           map[string][]string
	StatusCode        int64
}
