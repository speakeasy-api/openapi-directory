package operations

import (
	"openapi/pkg/models/shared"
)

type GetPublicKeyResponse struct {
	CobrandPublicKeyResponse *shared.CobrandPublicKeyResponse
	ContentType              string
	StatusCode               int64
}
