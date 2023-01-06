package operations

type GetSubscriptionsByKeyAndVersionPathParams struct {
	SubscriptionKey string `pathParam:"style=simple,explode=false,name=subscription-key"`
	Version         string `pathParam:"style=simple,explode=false,name=version"`
}

type GetSubscriptionsByKeyAndVersionQueryParams struct {
	ChargeDetail *string `queryParam:"style=form,explode=true,name=charge-detail"`
}

type GetSubscriptionsByKeyAndVersionHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetSubscriptionsByKeyAndVersionRequest struct {
	PathParams  GetSubscriptionsByKeyAndVersionPathParams
	QueryParams GetSubscriptionsByKeyAndVersionQueryParams
	Headers     GetSubscriptionsByKeyAndVersionHeaders
}

type GetSubscriptionsByKeyAndVersionResponse struct {
	ContentType                    string
	GETSubscriptionTypeWithSuccess map[string]interface{}
	Headers                        map[string][]string
	StatusCode                     int64
}
