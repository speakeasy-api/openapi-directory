package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetPaymentRunsQueryParams struct {
	CreatedByID *string                            `queryParam:"style=form,explode=true,name=createdById"`
	CreatedDate *time.Time                         `queryParam:"style=form,explode=true,name=createdDate"`
	PageSize    *int64                             `queryParam:"style=form,explode=true,name=pageSize"`
	Sort        *string                            `queryParam:"style=form,explode=true,name=sort"`
	Status      *shared.GlobalRequestPageSizeEnum4 `queryParam:"style=form,explode=true,name=status"`
	TargetDate  *time.Time                         `queryParam:"style=form,explode=true,name=targetDate"`
	UpdatedByID *string                            `queryParam:"style=form,explode=true,name=updatedById"`
	UpdatedDate *time.Time                         `queryParam:"style=form,explode=true,name=updatedDate"`
}

type GetPaymentRunsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetPaymentRunsRequest struct {
	QueryParams GetPaymentRunsQueryParams
	Headers     GetPaymentRunsHeaders
}

type GetPaymentRunsResponse struct {
	ContentType                 string
	GETPaymentRunCollectionType *shared.GetPaymentRunCollectionType
	Headers                     map[string][]string
	StatusCode                  int64
}
