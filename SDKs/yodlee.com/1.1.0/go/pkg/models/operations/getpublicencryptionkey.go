package operations

import (
	"openapi/pkg/models/shared"
)

type GetPublicEncryptionKeyResponse struct {
	ConfigsPublicKeyResponse *shared.ConfigsPublicKeyResponse
	ContentType              string
	StatusCode               int64
}
