package operations

type GetCreditMemoItemPathParams struct {
	Cmitemid     string `pathParam:"style=simple,explode=false,name=cmitemid"`
	CreditMemoID string `pathParam:"style=simple,explode=false,name=creditMemoId"`
}

type GetCreditMemoItemHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *string `header:"style=simple,explode=false,name=zuora-version"`
}

type GetCreditMemoItemRequest struct {
	PathParams GetCreditMemoItemPathParams
	Headers    GetCreditMemoItemHeaders
}

type GetCreditMemoItemResponse struct {
	ContentType           string
	GETCreditMemoItemType map[string]interface{}
	Headers               map[string][]string
	StatusCode            int64
}
