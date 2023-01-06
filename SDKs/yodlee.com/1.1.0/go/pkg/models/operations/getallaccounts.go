package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllAccountsQueryParams struct {
	AccountID         *string `queryParam:"style=form,explode=true,name=accountId"`
	Container         *string `queryParam:"style=form,explode=true,name=container"`
	Include           *string `queryParam:"style=form,explode=true,name=include"`
	ProviderAccountID *string `queryParam:"style=form,explode=true,name=providerAccountId"`
	RequestID         *string `queryParam:"style=form,explode=true,name=requestId"`
	Status            *string `queryParam:"style=form,explode=true,name=status"`
}

type GetAllAccountsRequest struct {
	QueryParams GetAllAccountsQueryParams
}

type GetAllAccountsResponse struct {
	AccountResponse *shared.AccountResponse
	ContentType     string
	StatusCode      int64
	YodleeError     *shared.YodleeError
}
