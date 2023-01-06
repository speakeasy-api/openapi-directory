package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePreferencesPathParams struct {
	ProviderAccountID int64 `pathParam:"style=simple,explode=false,name=providerAccountId"`
}

type UpdatePreferencesRequest struct {
	PathParams UpdatePreferencesPathParams
	Request    shared.ProviderAccountPreferencesRequest `request:"mediaType=application/json"`
}

type UpdatePreferencesResponse struct {
	ContentType string
	StatusCode  int64
	YodleeError *shared.YodleeError
}
