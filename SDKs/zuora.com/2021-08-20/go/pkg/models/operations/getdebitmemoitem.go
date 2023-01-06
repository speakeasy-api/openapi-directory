package operations

type GetDebitMemoItemPathParams struct {
	DebitMemoID string `pathParam:"style=simple,explode=false,name=debitMemoId"`
	Dmitemid    string `pathParam:"style=simple,explode=false,name=dmitemid"`
}

type GetDebitMemoItemHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *string `header:"style=simple,explode=false,name=zuora-version"`
}

type GetDebitMemoItemRequest struct {
	PathParams GetDebitMemoItemPathParams
	Headers    GetDebitMemoItemHeaders
}

type GetDebitMemoItemResponse struct {
	ContentType          string
	GETDebitMemoItemType map[string]interface{}
	Headers              map[string][]string
	StatusCode           int64
}
