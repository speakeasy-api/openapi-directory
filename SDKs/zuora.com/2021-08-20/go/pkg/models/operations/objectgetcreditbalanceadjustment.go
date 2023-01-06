package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetCreditBalanceAdjustmentPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetCreditBalanceAdjustmentQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetCreditBalanceAdjustmentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetCreditBalanceAdjustmentRequest struct {
	PathParams  ObjectGetCreditBalanceAdjustmentPathParams
	QueryParams ObjectGetCreditBalanceAdjustmentQueryParams
	Headers     ObjectGetCreditBalanceAdjustmentHeaders
}

type ObjectGetCreditBalanceAdjustmentResponse struct {
	ContentType                     string
	Headers                         map[string][]string
	ProxyGetCreditBalanceAdjustment map[string]interface{}
	ProxyNoDataResponse             *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse       *shared.ProxyUnauthorizedResponse
	StatusCode                      int64
}
