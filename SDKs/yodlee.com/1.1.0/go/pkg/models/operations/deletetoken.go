package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTokenResponse struct {
	ContentType string
	StatusCode  int64
	YodleeError *shared.YodleeError
}
