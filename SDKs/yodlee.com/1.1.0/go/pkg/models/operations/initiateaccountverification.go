package operations

import (
	"openapi/pkg/models/shared"
)

type InitiateAccountVerificationPathParams struct {
	ProviderAccountID string `pathParam:"style=simple,explode=false,name=providerAccountId"`
}

type InitiateAccountVerificationRequest struct {
	PathParams InitiateAccountVerificationPathParams
	Request    shared.VerifyAccountRequestInput `request:"mediaType=application/json"`
}

type InitiateAccountVerificationResponse struct {
	ContentType           string
	StatusCode            int64
	VerifyAccountResponse *shared.VerifyAccountResponse
	YodleeError           *shared.YodleeError
}
