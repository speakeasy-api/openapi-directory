package operations

type GetRevenueEventDetailsPathParams struct {
	EventNumber string `pathParam:"style=simple,explode=false,name=event-number"`
}

type GetRevenueEventDetailsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRevenueEventDetailsRequest struct {
	PathParams GetRevenueEventDetailsPathParams
	Headers    GetRevenueEventDetailsHeaders
}

type GetRevenueEventDetailsResponse struct {
	ContentType               string
	GETRevenueEventDetailType map[string]interface{}
	Headers                   map[string][]string
	StatusCode                int64
}
