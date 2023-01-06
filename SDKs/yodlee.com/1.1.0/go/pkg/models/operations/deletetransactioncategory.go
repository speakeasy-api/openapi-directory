package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTransactionCategoryPathParams struct {
	CategoryID int64 `pathParam:"style=simple,explode=false,name=categoryId"`
}

type DeleteTransactionCategoryRequest struct {
	PathParams DeleteTransactionCategoryPathParams
}

type DeleteTransactionCategoryResponse struct {
	ContentType string
	StatusCode  int64
	YodleeError *shared.YodleeError
}
