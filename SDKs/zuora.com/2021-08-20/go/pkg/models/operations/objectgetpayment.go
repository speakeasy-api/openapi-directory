package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetPaymentPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetPaymentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetPaymentRequest struct {
	PathParams ObjectGetPaymentPathParams
	Headers    ObjectGetPaymentHeaders
}

type ObjectGetPaymentResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyGetPayment           map[string]interface{}
	ProxyNoDataResponse       *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
