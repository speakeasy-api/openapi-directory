package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransactionsCountQueryParams struct {
	AccountID           *string `queryParam:"style=form,explode=true,name=accountId"`
	BaseType            *string `queryParam:"style=form,explode=true,name=baseType"`
	CategoryID          *string `queryParam:"style=form,explode=true,name=categoryId"`
	CategoryType        *string `queryParam:"style=form,explode=true,name=categoryType"`
	Container           *string `queryParam:"style=form,explode=true,name=container"`
	DetailCategoryID    *string `queryParam:"style=form,explode=true,name=detailCategoryId"`
	FromDate            *string `queryParam:"style=form,explode=true,name=fromDate"`
	HighLevelCategoryID *string `queryParam:"style=form,explode=true,name=highLevelCategoryId"`
	Keyword             *string `queryParam:"style=form,explode=true,name=keyword"`
	ToDate              *string `queryParam:"style=form,explode=true,name=toDate"`
	Type                *string `queryParam:"style=form,explode=true,name=type"`
}

type GetTransactionsCountRequest struct {
	QueryParams GetTransactionsCountQueryParams
}

type GetTransactionsCountResponse struct {
	ContentType              string
	StatusCode               int64
	TransactionCountResponse *shared.TransactionCountResponse
	YodleeError              *shared.YodleeError
}
