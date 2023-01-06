package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectDeletePaymentPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectDeletePaymentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectDeletePaymentRequest struct {
	PathParams ObjectDeletePaymentPathParams
	Headers    ObjectDeletePaymentHeaders
}

type ObjectDeletePaymentResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyDeleteResponse       *shared.ProxyDeleteResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
