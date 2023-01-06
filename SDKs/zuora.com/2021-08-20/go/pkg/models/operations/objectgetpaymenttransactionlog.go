package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetPaymentTransactionLogPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetPaymentTransactionLogHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetPaymentTransactionLogRequest struct {
	PathParams ObjectGetPaymentTransactionLogPathParams
	Headers    ObjectGetPaymentTransactionLogHeaders
}

type ObjectGetPaymentTransactionLogResponse struct {
	ContentType                   string
	Headers                       map[string][]string
	ProxyGetPaymentTransactionLog *shared.ProxyGetPaymentTransactionLog
	ProxyNoDataResponse           *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse     *shared.ProxyUnauthorizedResponse
	StatusCode                    int64
}
