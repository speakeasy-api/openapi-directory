package operations

import (
	"openapi/pkg/models/shared"
)

type VerifyChallengeDepositRequest struct {
	Request shared.UpdateVerificationRequestInput `request:"mediaType=application/json"`
}

type VerifyChallengeDepositResponse struct {
	ContentType          string
	StatusCode           int64
	VerificationResponse *shared.VerificationResponse
	YodleeError          *shared.YodleeError
}
