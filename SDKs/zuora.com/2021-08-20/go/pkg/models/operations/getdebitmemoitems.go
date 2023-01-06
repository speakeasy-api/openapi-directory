package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetDebitMemoItemsPathParams struct {
	DebitMemoID string `pathParam:"style=simple,explode=false,name=debitMemoId"`
}

type GetDebitMemoItemsQueryParams struct {
	Amount           *float64   `queryParam:"style=form,explode=true,name=amount"`
	BeAppliedAmount  *float64   `queryParam:"style=form,explode=true,name=beAppliedAmount"`
	CreatedByID      *string    `queryParam:"style=form,explode=true,name=createdById"`
	CreatedDate      *time.Time `queryParam:"style=form,explode=true,name=createdDate"`
	ID               *string    `queryParam:"style=form,explode=true,name=id"`
	PageSize         *int64     `queryParam:"style=form,explode=true,name=pageSize"`
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

type GetDebitMemoItemsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *string `header:"style=simple,explode=false,name=zuora-version"`
}

type GetDebitMemoItemsRequest struct {
	PathParams  GetDebitMemoItemsPathParams
	QueryParams GetDebitMemoItemsQueryParams
	Headers     GetDebitMemoItemsHeaders
}

type GetDebitMemoItemsResponse struct {
	ContentType                    string
	GETDebitMemoItemCollectionType *shared.GetDebitMemoItemCollectionType
	Headers                        map[string][]string
	StatusCode                     int64
}
