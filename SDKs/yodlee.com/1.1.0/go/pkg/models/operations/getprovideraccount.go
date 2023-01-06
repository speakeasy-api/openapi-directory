package operations

import (
	"openapi/pkg/models/shared"
)

type GetProviderAccountPathParams struct {
	ProviderAccountID int64 `pathParam:"style=simple,explode=false,name=providerAccountId"`
}

type GetProviderAccountQueryParams struct {
	Include   *string `queryParam:"style=form,explode=true,name=include"`
	RequestID *string `queryParam:"style=form,explode=true,name=requestId"`
}

type GetProviderAccountRequest struct {
	PathParams  GetProviderAccountPathParams
	QueryParams GetProviderAccountQueryParams
}

type GetProviderAccountResponse struct {
	ContentType                   string
	ProviderAccountDetailResponse *shared.ProviderAccountDetailResponse
	StatusCode                    int64
	YodleeError                   *shared.YodleeError
}
