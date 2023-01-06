package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubscriptionTermInfoPathParams struct {
	SubscriptionNumber string `pathParam:"style=simple,explode=false,name=subscriptionNumber"`
}

type GetSubscriptionTermInfoQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
	Version  *int64 `queryParam:"style=form,explode=true,name=version"`
}

type GetSubscriptionTermInfoHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetSubscriptionTermInfoRequest struct {
	PathParams  GetSubscriptionTermInfoPathParams
	QueryParams GetSubscriptionTermInfoQueryParams
	Headers     GetSubscriptionTermInfoHeaders
}

type GetSubscriptionTermInfoResponse struct {
	ContentType                         string
	GetSubscriptionTermInfoResponseType *shared.GetSubscriptionTermInfoResponseType
	Headers                             map[string][]string
	StatusCode                          int64
}
