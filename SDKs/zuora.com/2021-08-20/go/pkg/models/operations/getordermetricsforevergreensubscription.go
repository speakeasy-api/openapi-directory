package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetOrderMetricsforEvergreenSubscriptionPathParams struct {
	OrderNumber        string `pathParam:"style=simple,explode=false,name=orderNumber"`
	SubscriptionNumber string `pathParam:"style=simple,explode=false,name=subscriptionNumber"`
}

type GetOrderMetricsforEvergreenSubscriptionQueryParams struct {
	EndDate   time.Time `queryParam:"style=form,explode=true,name=endDate"`
	StartDate time.Time `queryParam:"style=form,explode=true,name=startDate"`
}

type GetOrderMetricsforEvergreenSubscriptionHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetOrderMetricsforEvergreenSubscriptionRequest struct {
	PathParams  GetOrderMetricsforEvergreenSubscriptionPathParams
	QueryParams GetOrderMetricsforEvergreenSubscriptionQueryParams
	Headers     GetOrderMetricsforEvergreenSubscriptionHeaders
}

type GetOrderMetricsforEvergreenSubscriptionResponse struct {
	ContentType                  string
	GetOrderResponseForEvergreen *shared.GetOrderResponseForEvergreen
	Headers                      map[string][]string
	StatusCode                   int64
}
