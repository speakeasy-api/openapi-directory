package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetRefundTransactionLogPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetRefundTransactionLogQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetRefundTransactionLogHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetRefundTransactionLogRequest struct {
	PathParams  ObjectGetRefundTransactionLogPathParams
	QueryParams ObjectGetRefundTransactionLogQueryParams
	Headers     ObjectGetRefundTransactionLogHeaders
}

type ObjectGetRefundTransactionLogResponse struct {
	ContentType                  string
	Headers                      map[string][]string
	ProxyGetRefundTransactionLog *shared.ProxyGetRefundTransactionLog
	ProxyNoDataResponse          *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse    *shared.ProxyUnauthorizedResponse
	StatusCode                   int64
}
