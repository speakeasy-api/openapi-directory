package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetCreditMemosQueryParams struct {
	AccountID                 *string                            `queryParam:"style=form,explode=true,name=accountId"`
	Amount                    *float64                           `queryParam:"style=form,explode=true,name=amount"`
	AppliedAmount             *float64                           `queryParam:"style=form,explode=true,name=appliedAmount"`
	AutoApplyUponPosting      *bool                              `queryParam:"style=form,explode=true,name=autoApplyUponPosting"`
	CreatedByID               *string                            `queryParam:"style=form,explode=true,name=createdById"`
	CreatedDate               *time.Time                         `queryParam:"style=form,explode=true,name=createdDate"`
	CreditMemoDate            *time.Time                         `queryParam:"style=form,explode=true,name=creditMemoDate"`
	Currency                  *string                            `queryParam:"style=form,explode=true,name=currency"`
	ExcludeFromAutoApplyRules *bool                              `queryParam:"style=form,explode=true,name=excludeFromAutoApplyRules"`
	Number                    *string                            `queryParam:"style=form,explode=true,name=number"`
	PageSize                  *int64                             `queryParam:"style=form,explode=true,name=pageSize"`
	ReferredInvoiceID         *string                            `queryParam:"style=form,explode=true,name=referredInvoiceId"`
	RefundAmount              *float64                           `queryParam:"style=form,explode=true,name=refundAmount"`
	Sort                      *string                            `queryParam:"style=form,explode=true,name=sort"`
	Status                    *shared.GlobalRequestPageSizeEnum2 `queryParam:"style=form,explode=true,name=status"`
	TargetDate                *time.Time                         `queryParam:"style=form,explode=true,name=targetDate"`
	TaxAmount                 *float64                           `queryParam:"style=form,explode=true,name=taxAmount"`
	TotalTaxExemptAmount      *float64                           `queryParam:"style=form,explode=true,name=totalTaxExemptAmount"`
	TransferredToAccounting   *shared.GlobalRequestPageSizeEnum3 `queryParam:"style=form,explode=true,name=transferredToAccounting"`
	UnappliedAmount           *float64                           `queryParam:"style=form,explode=true,name=unappliedAmount"`
	UpdatedByID               *string                            `queryParam:"style=form,explode=true,name=updatedById"`
	UpdatedDate               *time.Time                         `queryParam:"style=form,explode=true,name=updatedDate"`
}

type GetCreditMemosHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetCreditMemosRequest struct {
	QueryParams GetCreditMemosQueryParams
	Headers     GetCreditMemosHeaders
}

type GetCreditMemosResponse struct {
	ContentType                 string
	GETCreditMemoCollectionType *shared.GetCreditMemoCollectionType
	Headers                     map[string][]string
	StatusCode                  int64
}
