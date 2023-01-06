package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentPartsPathParams struct {
	PaymentID string `pathParam:"style=simple,explode=false,name=paymentId"`
}

type GetPaymentPartsQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetPaymentPartsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetPaymentPartsRequest struct {
	PathParams  GetPaymentPartsPathParams
	QueryParams GetPaymentPartsQueryParams
	Headers     GetPaymentPartsHeaders
}

type GetPaymentPartsResponse struct {
	ContentType                   string
	GETPaymentPartsCollectionType *shared.GetPaymentPartsCollectionType
	Headers                       map[string][]string
	StatusCode                    int64
}
