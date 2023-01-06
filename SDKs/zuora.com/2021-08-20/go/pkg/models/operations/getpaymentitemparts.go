package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentItemPartsPathParams struct {
	Partid    string `pathParam:"style=simple,explode=false,name=partid"`
	PaymentID string `pathParam:"style=simple,explode=false,name=paymentId"`
}

type GetPaymentItemPartsQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetPaymentItemPartsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetPaymentItemPartsRequest struct {
	PathParams  GetPaymentItemPartsPathParams
	QueryParams GetPaymentItemPartsQueryParams
	Headers     GetPaymentItemPartsHeaders
}

type GetPaymentItemPartsResponse struct {
	ContentType                      string
	GETPaymentItemPartCollectionType *shared.GetPaymentItemPartCollectionType
	Headers                          map[string][]string
	StatusCode                       int64
}
