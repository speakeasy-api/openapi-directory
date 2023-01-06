package operations

import (
	"openapi/pkg/models/shared"
)

type GetRampMetricsBySubscriptionKeyPathParams struct {
	SubscriptionKey string `pathParam:"style=simple,explode=false,name=subscriptionKey"`
}

type GetRampMetricsBySubscriptionKeyHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRampMetricsBySubscriptionKeyRequest struct {
	PathParams GetRampMetricsBySubscriptionKeyPathParams
	Headers    GetRampMetricsBySubscriptionKeyHeaders
}

type GetRampMetricsBySubscriptionKeyResponse struct {
	ContentType                                 string
	GETRampMetricsBySubscriptionKeyResponseType *shared.GetRampMetricsBySubscriptionKeyResponseType
	Headers                                     map[string][]string
	StatusCode                                  int64
}
