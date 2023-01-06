package operations

type GetAccountingPeriodPathParams struct {
	ApID string `pathParam:"style=simple,explode=false,name=ap-id"`
}

type GetAccountingPeriodHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetAccountingPeriodRequest struct {
	PathParams GetAccountingPeriodPathParams
	Headers    GetAccountingPeriodHeaders
}

type GetAccountingPeriodResponse struct {
	ContentType             string
	GETAccountingPeriodType map[string]interface{}
	Headers                 map[string][]string
	StatusCode              int64
}
