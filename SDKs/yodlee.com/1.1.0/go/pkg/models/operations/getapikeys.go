package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIKeysResponse struct {
	APIKeyResponse *shared.APIKeyResponse
	ContentType    string
	StatusCode     int64
}
