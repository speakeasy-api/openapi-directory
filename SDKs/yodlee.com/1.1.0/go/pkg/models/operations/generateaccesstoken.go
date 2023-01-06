package operations

import (
	"openapi/pkg/models/shared"
)

type GenerateAccessTokenResponse struct {
	ClientCredentialTokenResponse *shared.ClientCredentialTokenResponse
	ContentType                   string
	StatusCode                    int64
	YodleeError                   *shared.YodleeError
}
