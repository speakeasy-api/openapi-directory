package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetCreditMemoItemsPathParams struct {
	CreditMemoID string `pathParam:"style=simple,explode=false,name=creditMemoId"`
}

type GetCreditMemoItemsQueryParams struct {
	Amount           *float64   `queryParam:"style=form,explode=true,name=amount"`
	AppliedAmount    *float64   `queryParam:"style=form,explode=true,name=appliedAmount"`
	CreatedByID      *string    `queryParam:"style=form,explode=true,name=createdById"`
	CreatedDate      *time.Time `queryParam:"style=form,explode=true,name=createdDate"`
	ID               *string    `queryParam:"style=form,explode=true,name=id"`
	PageSize         *int64     `queryParam:"style=form,explode=true,name=pageSize"`
	RefundAmount     *float64   `queryParam:"style=form,explode=true,name=refundAmount"`
	ServiceEndDate   *time.Time `queryParam:"style=form,explode=true,name=serviceEndDate"`
	ServiceStartDate *time.Time `queryParam:"style=form,explode=true,name=serviceStartDate"`
	Sku              *string    `queryParam:"style=form,explode=true,name=sku"`
	SkuName          *string    `queryParam:"style=form,explode=true,name=skuName"`
	Sort             *string    `queryParam:"style=form,explode=true,name=sort"`
	SourceItemID     *string    `queryParam:"style=form,explode=true,name=sourceItemId"`
	SubscriptionID   *string    `queryParam:"style=form,explode=true,name=subscriptionId"`
	UpdatedByID      *string    `queryParam:"style=form,explode=true,name=updatedById"`
	UpdatedDate      *time.Time `queryParam:"style=form,explode=true,name=updatedDate"`
}

type GetCreditMemoItemsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *string `header:"style=simple,explode=false,name=zuora-version"`
}

type GetCreditMemoItemsRequest struct {
	PathParams  GetCreditMemoItemsPathParams
	QueryParams GetCreditMemoItemsQueryParams
	Headers     GetCreditMemoItemsHeaders
}

type GetCreditMemoItemsResponse struct {
	ContentType                string
	GETCreditMemoItemsListType *shared.GetCreditMemoItemsListType
	Headers                    map[string][]string
	StatusCode                 int64
}
