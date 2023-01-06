package operations

import (
	"openapi/pkg/models/shared"
)

type GenerateAPIKeyRequest struct {
	Request shared.APIKeyRequest `request:"mediaType=application/json"`
}

type GenerateAPIKeyResponse struct {
	APIKeyResponse *shared.APIKeyResponse
	ContentType    string
	StatusCode     int64
	YodleeError    *shared.YodleeError
}
