package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetPaymentMethodTransactionLogPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetPaymentMethodTransactionLogQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetPaymentMethodTransactionLogHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetPaymentMethodTransactionLogRequest struct {
	PathParams  ObjectGetPaymentMethodTransactionLogPathParams
	QueryParams ObjectGetPaymentMethodTransactionLogQueryParams
	Headers     ObjectGetPaymentMethodTransactionLogHeaders
}

type ObjectGetPaymentMethodTransactionLogResponse struct {
	ContentType                         string
	Headers                             map[string][]string
	ProxyGetPaymentMethodTransactionLog *shared.ProxyGetPaymentMethodTransactionLog
	ProxyNoDataResponse                 *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse           *shared.ProxyUnauthorizedResponse
	StatusCode                          int64
}
