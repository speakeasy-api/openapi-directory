package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetRetrieveAllPaymentsQueryParams struct {
	AccountID           *string                            `queryParam:"style=form,explode=true,name=accountId"`
	Amount              *float64                           `queryParam:"style=form,explode=true,name=amount"`
	AppliedAmount       *float64                           `queryParam:"style=form,explode=true,name=appliedAmount"`
	CreatedByID         *string                            `queryParam:"style=form,explode=true,name=createdById"`
	CreatedDate         *time.Time                         `queryParam:"style=form,explode=true,name=createdDate"`
	CreditBalanceAmount *float64                           `queryParam:"style=form,explode=true,name=creditBalanceAmount"`
	Currency            *string                            `queryParam:"style=form,explode=true,name=currency"`
	EffectiveDate       *time.Time                         `queryParam:"style=form,explode=true,name=effectiveDate"`
	Number              *string                            `queryParam:"style=form,explode=true,name=number"`
	PageSize            *int64                             `queryParam:"style=form,explode=true,name=pageSize"`
	RefundAmount        *float64                           `queryParam:"style=form,explode=true,name=refundAmount"`
	Sort                *string                            `queryParam:"style=form,explode=true,name=sort"`
	Status              *shared.GlobalRequestPageSizeEnum5 `queryParam:"style=form,explode=true,name=status"`
	Type                *shared.GlobalRequestPageSizeEnum6 `queryParam:"style=form,explode=true,name=type"`
	UnappliedAmount     *float64                           `queryParam:"style=form,explode=true,name=unappliedAmount"`
	UpdatedByID         *string                            `queryParam:"style=form,explode=true,name=updatedById"`
	UpdatedDate         *time.Time                         `queryParam:"style=form,explode=true,name=updatedDate"`
}

type GetRetrieveAllPaymentsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetRetrieveAllPaymentsRequest struct {
	QueryParams GetRetrieveAllPaymentsQueryParams
	Headers     GetRetrieveAllPaymentsHeaders
}

type GetRetrieveAllPaymentsResponse struct {
	ContentType                   string
	Headers                       map[string][]string
	PaymentCollectionResponseType *shared.PaymentCollectionResponseType
	StatusCode                    int64
}
