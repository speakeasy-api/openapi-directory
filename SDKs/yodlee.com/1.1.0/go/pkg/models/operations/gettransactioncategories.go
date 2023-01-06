package operations

import (
	"openapi/pkg/models/shared"
)

type GetTransactionCategoriesResponse struct {
	ContentType                 string
	StatusCode                  int64
	TransactionCategoryResponse *shared.TransactionCategoryResponse
}
