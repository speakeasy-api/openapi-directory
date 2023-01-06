package operations

import (
	"openapi/pkg/models/shared"
)

type CreateManualAccountRequest struct {
	Request shared.CreateAccountRequest `request:"mediaType=application/json"`
}

type CreateManualAccountResponse struct {
	ContentType            string
	CreatedAccountResponse *shared.CreatedAccountResponse
	StatusCode             int64
	YodleeError            *shared.YodleeError
}
