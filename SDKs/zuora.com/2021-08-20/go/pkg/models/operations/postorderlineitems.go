package operations

import (
	"openapi/pkg/models/shared"
)

type PostOrderLineItemsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostOrderLineItemsRequest struct {
	Headers PostOrderLineItemsHeaders
	Request shared.PostOrderLineItemsRequestType `request:"mediaType=application/json"`
}

type PostOrderLineItemsResponse struct {
	ContentType                  string
	GetOrderLineItemResponseType *shared.GetOrderLineItemResponseType
	Headers                      map[string][]string
	StatusCode                   int64
}
