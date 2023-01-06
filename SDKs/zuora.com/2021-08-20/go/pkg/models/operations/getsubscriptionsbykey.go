package operations

type GetSubscriptionsByKeyPathParams struct {
	SubscriptionKey string `pathParam:"style=simple,explode=false,name=subscription-key"`
}

type GetSubscriptionsByKeyQueryParams struct {
	ChargeDetail *string `queryParam:"style=form,explode=true,name=charge-detail"`
}

type GetSubscriptionsByKeyHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetSubscriptionsByKeyRequest struct {
	PathParams  GetSubscriptionsByKeyPathParams
	QueryParams GetSubscriptionsByKeyQueryParams
	Headers     GetSubscriptionsByKeyHeaders
}

type GetSubscriptionsByKeyResponse struct {
	ContentType                    string
	GETSubscriptionTypeWithSuccess map[string]interface{}
	Headers                        map[string][]string
	StatusCode                     int64
}
