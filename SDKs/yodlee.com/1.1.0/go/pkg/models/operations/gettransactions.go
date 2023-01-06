package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransactionsQueryParams struct {
	AccountID           *string `queryParam:"style=form,explode=true,name=accountId"`
	BaseType            *string `queryParam:"style=form,explode=true,name=baseType"`
	CategoryID          *string `queryParam:"style=form,explode=true,name=categoryId"`
	CategoryType        *string `queryParam:"style=form,explode=true,name=categoryType"`
	Container           *string `queryParam:"style=form,explode=true,name=container"`
	DetailCategoryID    *string `queryParam:"style=form,explode=true,name=detailCategoryId"`
	FromDate            *string `queryParam:"style=form,explode=true,name=fromDate"`
	HighLevelCategoryID *string `queryParam:"style=form,explode=true,name=highLevelCategoryId"`
	Keyword             *string `queryParam:"style=form,explode=true,name=keyword"`
	Skip                *int32  `queryParam:"style=form,explode=true,name=skip"`
	ToDate              *string `queryParam:"style=form,explode=true,name=toDate"`
	Top                 *int32  `queryParam:"style=form,explode=true,name=top"`
	Type                *string `queryParam:"style=form,explode=true,name=type"`
}

type GetTransactionsRequest struct {
	QueryParams GetTransactionsQueryParams
}

type GetTransactionsResponse struct {
	ContentType         string
	StatusCode          int64
	TransactionResponse *shared.TransactionResponse
	YodleeError         *shared.YodleeError
}
