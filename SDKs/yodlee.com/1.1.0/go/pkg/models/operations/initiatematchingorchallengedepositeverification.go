package operations

import (
	"openapi/pkg/models/shared"
)

type InitiateMatchingOrChallengeDepositeVerificationRequest struct {
	Request shared.VerificationRequestInput `request:"mediaType=application/json"`
}

type InitiateMatchingOrChallengeDepositeVerificationResponse struct {
	ContentType          string
	StatusCode           int64
	VerificationResponse *shared.VerificationResponse
	YodleeError          *shared.YodleeError
}
