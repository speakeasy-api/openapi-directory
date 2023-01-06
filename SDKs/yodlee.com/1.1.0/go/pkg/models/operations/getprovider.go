package operations

import (
	"openapi/pkg/models/shared"
)

type GetProviderPathParams struct {
	ProviderID int64 `pathParam:"style=simple,explode=false,name=providerId"`
}

type GetProviderRequest struct {
	PathParams GetProviderPathParams
}

type GetProviderResponse struct {
	ContentType            string
	ProviderDetailResponse *shared.ProviderDetailResponse
	StatusCode             int64
	YodleeError            *shared.YodleeError
}
