package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetPaymentMethodPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetPaymentMethodQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetPaymentMethodHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetPaymentMethodRequest struct {
	PathParams  ObjectGetPaymentMethodPathParams
	QueryParams ObjectGetPaymentMethodQueryParams
	Headers     ObjectGetPaymentMethodHeaders
}

type ObjectGetPaymentMethodResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyGetPaymentMethod     *shared.ProxyGetPaymentMethod
	ProxyNoDataResponse       *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
