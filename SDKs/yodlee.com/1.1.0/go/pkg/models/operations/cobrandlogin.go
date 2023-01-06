package operations

import (
	"openapi/pkg/models/shared"
)

type CobrandLoginRequest struct {
	Request shared.CobrandLoginRequest `request:"mediaType=application/json"`
}

type CobrandLoginResponse struct {
	CobrandLoginResponse *shared.CobrandLoginResponse
	ContentType          string
	StatusCode           int64
	YodleeError          *shared.YodleeError
}
