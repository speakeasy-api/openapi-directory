package operations

import (
	"openapi/pkg/models/shared"
)

type EditCredentialsOrRefreshProviderAccountQueryParams struct {
	ProviderAccountIds string `queryParam:"style=form,explode=true,name=providerAccountIds"`
}

type EditCredentialsOrRefreshProviderAccountRequest struct {
	QueryParams EditCredentialsOrRefreshProviderAccountQueryParams
	Request     *shared.ProviderAccountRequestInput `request:"mediaType=application/json"`
}

type EditCredentialsOrRefreshProviderAccountResponse struct {
	ContentType                    string
	StatusCode                     int64
	UpdatedProviderAccountResponse *shared.UpdatedProviderAccountResponse
	YodleeError                    *shared.YodleeError
}
