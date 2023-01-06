package operations

import (
	"openapi/pkg/models/shared"
)

type GetHistoricalBalancesQueryParams struct {
	AccountID *string `queryParam:"style=form,explode=true,name=accountId"`
	FromDate  *string `queryParam:"style=form,explode=true,name=fromDate"`
	IncludeCF *bool   `queryParam:"style=form,explode=true,name=includeCF"`
	Interval  *string `queryParam:"style=form,explode=true,name=interval"`
	Skip      *int32  `queryParam:"style=form,explode=true,name=skip"`
	ToDate    *string `queryParam:"style=form,explode=true,name=toDate"`
	Top       *int32  `queryParam:"style=form,explode=true,name=top"`
}

type GetHistoricalBalancesRequest struct {
	QueryParams GetHistoricalBalancesQueryParams
}

type GetHistoricalBalancesResponse struct {
	AccountHistoricalBalancesResponse *shared.AccountHistoricalBalancesResponse
	ContentType                       string
	StatusCode                        int64
	YodleeError                       *shared.YodleeError
}
