package operations

type GetAccountingCodePathParams struct {
	AcID string `pathParam:"style=simple,explode=false,name=ac-id"`
}

type GetAccountingCodeHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetAccountingCodeRequest struct {
	PathParams GetAccountingCodePathParams
	Headers    GetAccountingCodeHeaders
}

type GetAccountingCodeResponse struct {
	ContentType               string
	GETAccountingCodeItemType map[string]interface{}
	Headers                   map[string][]string
	StatusCode                int64
}
