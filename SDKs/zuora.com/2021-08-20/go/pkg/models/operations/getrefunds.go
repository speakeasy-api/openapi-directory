package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetRefundsQueryParams struct {
	AccountID   *string                            `queryParam:"style=form,explode=true,name=accountId"`
	Amount      *float64                           `queryParam:"style=form,explode=true,name=amount"`
	CreatedByID *string                            `queryParam:"style=form,explode=true,name=createdById"`
	CreatedDate *time.Time                         `queryParam:"style=form,explode=true,name=createdDate"`
	MethodType  *shared.GlobalRequestPageSizeEnum7 `queryParam:"style=form,explode=true,name=methodType"`
	Number      *string                            `queryParam:"style=form,explode=true,name=number"`
	PageSize    *int64                             `queryParam:"style=form,explode=true,name=pageSize"`
	PaymentID   *string                            `queryParam:"style=form,explode=true,name=paymentId"`
	RefundDate  *time.Time                         `queryParam:"style=form,explode=true,name=refundDate"`
	Sort        *string                            `queryParam:"style=form,explode=true,name=sort"`
	Status      *shared.GlobalRequestPageSizeEnum8 `queryParam:"style=form,explode=true,name=status"`
	Type        *shared.GlobalRequestPageSizeEnum6 `queryParam:"style=form,explode=true,name=type"`
	UpdatedByID *string                            `queryParam:"style=form,explode=true,name=updatedById"`
	UpdatedDate *time.Time                         `queryParam:"style=form,explode=true,name=updatedDate"`
}

type GetRefundsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRefundsRequest struct {
	QueryParams GetRefundsQueryParams
	Headers     GetRefundsHeaders
}

type GetRefundsResponse struct {
	ContentType             string
	GETRefundCollectionType *shared.GetRefundCollectionType
	Headers                 map[string][]string
	StatusCode              int64
}
