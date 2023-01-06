package operations

import (
	"openapi/pkg/models/shared"
)

type GetProviderAccountProfilesQueryParams struct {
	ProviderAccountID *string `queryParam:"style=form,explode=true,name=providerAccountId"`
}

type GetProviderAccountProfilesRequest struct {
	QueryParams GetProviderAccountProfilesQueryParams
}

type GetProviderAccountProfilesResponse struct {
	ContentType                        string
	ProviderAccountUserProfileResponse *shared.ProviderAccountUserProfileResponse
	StatusCode                         int64
}
