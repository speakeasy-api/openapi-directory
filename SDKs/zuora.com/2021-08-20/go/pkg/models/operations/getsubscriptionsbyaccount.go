package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubscriptionsByAccountPathParams struct {
	AccountKey string `pathParam:"style=simple,explode=false,name=account-key"`
}

type GetSubscriptionsByAccountQueryParams struct {
	ChargeDetail *string `queryParam:"style=form,explode=true,name=charge-detail"`
	PageSize     *int64  `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetSubscriptionsByAccountHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetSubscriptionsByAccountRequest struct {
	PathParams  GetSubscriptionsByAccountPathParams
	QueryParams GetSubscriptionsByAccountQueryParams
	Headers     GetSubscriptionsByAccountHeaders
}

type GetSubscriptionsByAccountResponse struct {
	ContentType            string
	GETSubscriptionWrapper *shared.GetSubscriptionWrapper
	Headers                map[string][]string
	StatusCode             int64
}
