package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllProviderAccountsQueryParams struct {
	Include     *string `queryParam:"style=form,explode=true,name=include"`
	ProviderIds *string `queryParam:"style=form,explode=true,name=providerIds"`
}

type GetAllProviderAccountsRequest struct {
	QueryParams GetAllProviderAccountsQueryParams
}

type GetAllProviderAccountsResponse struct {
	ContentType             string
	ProviderAccountResponse *shared.ProviderAccountResponse
	StatusCode              int64
}
