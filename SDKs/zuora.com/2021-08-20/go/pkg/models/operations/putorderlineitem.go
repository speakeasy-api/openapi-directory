package operations

import (
	"openapi/pkg/models/shared"
)

type PutOrderLineItemPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type PutOrderLineItemHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutOrderLineItemRequest struct {
	PathParams PutOrderLineItemPathParams
	Headers    PutOrderLineItemHeaders
	Request    shared.OrderLineItemCommon `request:"mediaType=application/json"`
}

type PutOrderLineItemResponse struct {
	ContentType                  string
	Headers                      map[string][]string
	PutOrderLineItemResponseType *shared.PutOrderLineItemResponseType
	StatusCode                   int64
}
