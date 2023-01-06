package operations

import (
	"openapi/pkg/models/shared"
)

type GetVerificationStatusQueryParams struct {
	AccountID         *string `queryParam:"style=form,explode=true,name=accountId"`
	ProviderAccountID *string `queryParam:"style=form,explode=true,name=providerAccountId"`
	VerificationType  *string `queryParam:"style=form,explode=true,name=verificationType"`
}

type GetVerificationStatusRequest struct {
	QueryParams GetVerificationStatusQueryParams
}

type GetVerificationStatusResponse struct {
	ContentType                string
	StatusCode                 int64
	VerificationStatusResponse *shared.VerificationStatusResponse
	YodleeError                *shared.YodleeError
}
