package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAPIKeyPathParams struct {
	Key string `pathParam:"style=simple,explode=false,name=key"`
}

type DeleteAPIKeyRequest struct {
	PathParams DeleteAPIKeyPathParams
}

type DeleteAPIKeyResponse struct {
	ContentType string
	StatusCode  int64
	YodleeError *shared.YodleeError
}
