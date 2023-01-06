package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTransactionCategoryRequest struct {
	Request shared.TransactionCategoryRequestInput `request:"mediaType=application/json"`
}

type CreateTransactionCategoryResponse struct {
	ContentType string
	StatusCode  int64
	YodleeError *shared.YodleeError
}
