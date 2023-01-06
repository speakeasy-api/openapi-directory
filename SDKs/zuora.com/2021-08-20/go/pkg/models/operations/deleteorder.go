package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteOrderPathParams struct {
	OrderNumber string `pathParam:"style=simple,explode=false,name=orderNumber"`
}

type DeleteOrderHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type DeleteOrderRequest struct {
	PathParams DeleteOrderPathParams
	Headers    DeleteOrderHeaders
}

type DeleteOrderResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
