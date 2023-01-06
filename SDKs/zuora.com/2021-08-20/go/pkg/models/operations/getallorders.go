package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetAllOrdersQueryParams struct {
	DateFilterOption *string    `queryParam:"style=form,explode=true,name=dateFilterOption"`
	EndDate          *time.Time `queryParam:"style=form,explode=true,name=endDate"`
	Page             *int64     `queryParam:"style=form,explode=true,name=page"`
	PageSize         *int64     `queryParam:"style=form,explode=true,name=pageSize"`
	StartDate        *time.Time `queryParam:"style=form,explode=true,name=startDate"`
}

type GetAllOrdersHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetAllOrdersRequest struct {
	QueryParams GetAllOrdersQueryParams
	Headers     GetAllOrdersHeaders
}

type GetAllOrdersResponse struct {
	ContentType              string
	GetAllOrdersResponseType *shared.GetAllOrdersResponseType
	Headers                  map[string][]string
	StatusCode               int64
}
