package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrderLineItemPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type GetOrderLineItemHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetOrderLineItemRequest struct {
	PathParams GetOrderLineItemPathParams
	Headers    GetOrderLineItemHeaders
}

type GetOrderLineItemResponse struct {
	ContentType                  string
	GetOrderLineItemResponseType *shared.GetOrderLineItemResponseType
	Headers                      map[string][]string
	StatusCode                   int64
}
