package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTransactionCategoryRequest struct {
	Request shared.UpdateCategoryRequest `request:"mediaType=application/json"`
}

type UpdateTransactionCategoryResponse struct {
	ContentType string
	StatusCode  int64
	YodleeError *shared.YodleeError
}
