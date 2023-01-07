package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetOrdersBySubscriptionNumberPathParams struct {
	SubscriptionNumber string `pathParam:"style=simple,explode=false,name=subscriptionNumber"`
}

type GetOrdersBySubscriptionNumberQueryParams struct {
	DateFilterOption *string    `queryParam:"style=form,explode=true,name=dateFilterOption"`
	EndDate          *time.Time `queryParam:"style=form,explode=true,name=endDate"`
	Page             *int64     `queryParam:"style=form,explode=true,name=page"`
	PageSize         *int64     `queryParam:"style=form,explode=true,name=pageSize"`
	StartDate        *time.Time `queryParam:"style=form,explode=true,name=startDate"`
}

type GetOrdersBySubscriptionNumberHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetOrdersBySubscriptionNumberRequest struct {
	PathParams  GetOrdersBySubscriptionNumberPathParams
	QueryParams GetOrdersBySubscriptionNumberQueryParams
	Headers     GetOrdersBySubscriptionNumberHeaders
}

type GetOrdersBySubscriptionNumberResponse struct {
	ContentType       string
	GetOrdersResponse *shared.GetOrdersResponse
	Headers           map[string][]string
	StatusCode        int64
}
