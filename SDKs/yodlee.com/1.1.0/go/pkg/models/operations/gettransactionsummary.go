package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransactionSummaryQueryParams struct {
	AccountID           *string `queryParam:"style=form,explode=true,name=accountId"`
	CategoryID          *string `queryParam:"style=form,explode=true,name=categoryId"`
	CategoryType        *string `queryParam:"style=form,explode=true,name=categoryType"`
	FromDate            *string `queryParam:"style=form,explode=true,name=fromDate"`
	GroupBy             string  `queryParam:"style=form,explode=true,name=groupBy"`
	Include             *string `queryParam:"style=form,explode=true,name=include"`
	IncludeUserCategory *bool   `queryParam:"style=form,explode=true,name=includeUserCategory"`
	Interval            *string `queryParam:"style=form,explode=true,name=interval"`
	ToDate              *string `queryParam:"style=form,explode=true,name=toDate"`
}

type GetTransactionSummaryRequest struct {
	QueryParams GetTransactionSummaryQueryParams
}

type GetTransactionSummaryResponse struct {
	ContentType                       string
	DerivedTransactionSummaryResponse *shared.DerivedTransactionSummaryResponse
	StatusCode                        int64
	YodleeError                       *shared.YodleeError
}
