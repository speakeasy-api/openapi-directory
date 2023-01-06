package operations

import (
	"openapi/pkg/models/shared"
)

type EvaluateAddressRequest struct {
	Request shared.EvaluateAddressRequest `request:"mediaType=application/json"`
}

type EvaluateAddressResponse struct {
	ContentType             string
	EvaluateAddressResponse *shared.EvaluateAddressResponse
	StatusCode              int64
	YodleeError             *shared.YodleeError
}
