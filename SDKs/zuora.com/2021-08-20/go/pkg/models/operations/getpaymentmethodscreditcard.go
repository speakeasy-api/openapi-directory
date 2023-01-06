package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentMethodsCreditCardPathParams struct {
	AccountKey string `pathParam:"style=simple,explode=false,name=account-key"`
}

type GetPaymentMethodsCreditCardQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetPaymentMethodsCreditCardHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetPaymentMethodsCreditCardRequest struct {
	PathParams  GetPaymentMethodsCreditCardPathParams
	QueryParams GetPaymentMethodsCreditCardQueryParams
	Headers     GetPaymentMethodsCreditCardHeaders
}

type GetPaymentMethodsCreditCardResponse struct {
	ContentType           string
	GETPaymentMethodsType *shared.GetPaymentMethodsType
	Headers               map[string][]string
	StatusCode            int64
}
