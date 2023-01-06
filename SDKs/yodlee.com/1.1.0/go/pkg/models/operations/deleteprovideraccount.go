package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProviderAccountPathParams struct {
	ProviderAccountID int64 `pathParam:"style=simple,explode=false,name=providerAccountId"`
}

type DeleteProviderAccountRequest struct {
	PathParams DeleteProviderAccountPathParams
}

type DeleteProviderAccountResponse struct {
	ContentType string
	StatusCode  int64
	YodleeError *shared.YodleeError
}
