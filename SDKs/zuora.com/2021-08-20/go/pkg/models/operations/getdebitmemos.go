package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetDebitMemosQueryParams struct {
	AccountID            *string                            `queryParam:"style=form,explode=true,name=accountId"`
	Amount               *float64                           `queryParam:"style=form,explode=true,name=amount"`
	Balance              *float64                           `queryParam:"style=form,explode=true,name=balance"`
	BeAppliedAmount      *float64                           `queryParam:"style=form,explode=true,name=beAppliedAmount"`
	CreatedByID          *string                            `queryParam:"style=form,explode=true,name=createdById"`
	CreatedDate          *time.Time                         `queryParam:"style=form,explode=true,name=createdDate"`
	Currency             *string                            `queryParam:"style=form,explode=true,name=currency"`
	DebitMemoDate        *time.Time                         `queryParam:"style=form,explode=true,name=debitMemoDate"`
	DueDate              *time.Time                         `queryParam:"style=form,explode=true,name=dueDate"`
	Number               *string                            `queryParam:"style=form,explode=true,name=number"`
	PageSize             *int64                             `queryParam:"style=form,explode=true,name=pageSize"`
	ReferredInvoiceID    *string                            `queryParam:"style=form,explode=true,name=referredInvoiceId"`
	Sort                 *string                            `queryParam:"style=form,explode=true,name=sort"`
	Status               *shared.GlobalRequestPageSizeEnum2 `queryParam:"style=form,explode=true,name=status"`
	TargetDate           *time.Time                         `queryParam:"style=form,explode=true,name=targetDate"`
	TaxAmount            *float64                           `queryParam:"style=form,explode=true,name=taxAmount"`
	TotalTaxExemptAmount *float64                           `queryParam:"style=form,explode=true,name=totalTaxExemptAmount"`
	UpdatedByID          *string                            `queryParam:"style=form,explode=true,name=updatedById"`
	UpdatedDate          *time.Time                         `queryParam:"style=form,explode=true,name=updatedDate"`
}

type GetDebitMemosHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetDebitMemosRequest struct {
	QueryParams GetDebitMemosQueryParams
	Headers     GetDebitMemosHeaders
}

type GetDebitMemosResponse struct {
	ContentType                string
	GETDebitMemoCollectionType *shared.GetDebitMemoCollectionType
	Headers                    map[string][]string
	StatusCode                 int64
}
