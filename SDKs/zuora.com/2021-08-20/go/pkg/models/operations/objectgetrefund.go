package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetRefundPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetRefundQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetRefundHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetRefundRequest struct {
	PathParams  ObjectGetRefundPathParams
	QueryParams ObjectGetRefundQueryParams
	Headers     ObjectGetRefundHeaders
}

type ObjectGetRefundResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyGetRefund            map[string]interface{}
	ProxyNoDataResponse       *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
