package operations

import (
	"openapi/pkg/models/shared"
)

type GetRampsBySubscriptionKeyPathParams struct {
	SubscriptionKey string `pathParam:"style=simple,explode=false,name=subscriptionKey"`
}

type GetRampsBySubscriptionKeyHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRampsBySubscriptionKeyRequest struct {
	PathParams GetRampsBySubscriptionKeyPathParams
	Headers    GetRampsBySubscriptionKeyHeaders
}

type GetRampsBySubscriptionKeyResponse struct {
	ContentType                           string
	GETRampsBySubscriptionKeyResponseType *shared.GetRampsBySubscriptionKeyResponseType
	Headers                               map[string][]string
	StatusCode                            int64
}
