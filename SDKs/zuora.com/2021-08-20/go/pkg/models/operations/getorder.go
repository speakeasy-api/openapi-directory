package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrderPathParams struct {
	OrderNumber string `pathParam:"style=simple,explode=false,name=orderNumber"`
}

type GetOrderHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetOrderRequest struct {
	PathParams GetOrderPathParams
	Headers    GetOrderHeaders
}

type GetOrderResponse struct {
	ContentType      string
	GetOrderResponse *shared.GetOrderResponse
	Headers          map[string][]string
	StatusCode       int64
}
