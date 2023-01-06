package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTransactionPathParams struct {
	TransactionID int64 `pathParam:"style=simple,explode=false,name=transactionId"`
}

type UpdateTransactionRequest struct {
	PathParams UpdateTransactionPathParams
	Request    shared.TransactionRequestInput `request:"mediaType=application/json"`
}

type UpdateTransactionResponse struct {
	ContentType string
	StatusCode  int64
	YodleeError *shared.YodleeError
}
