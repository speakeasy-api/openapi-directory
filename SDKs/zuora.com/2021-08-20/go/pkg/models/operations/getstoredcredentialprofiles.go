package operations

import (
	"openapi/pkg/models/shared"
)

type GetStoredCredentialProfilesPathParams struct {
	PaymentMethodID string `pathParam:"style=simple,explode=false,name=payment-method-id"`
}

type GetStoredCredentialProfilesQueryParams struct {
	IncludeAll *bool `queryParam:"style=form,explode=true,name=includeAll"`
}

type GetStoredCredentialProfilesHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetStoredCredentialProfilesRequest struct {
	PathParams  GetStoredCredentialProfilesPathParams
	QueryParams GetStoredCredentialProfilesQueryParams
	Headers     GetStoredCredentialProfilesHeaders
}

type GetStoredCredentialProfilesResponse struct {
	ContentType                         string
	GetStoredCredentialProfilesResponse *shared.GetStoredCredentialProfilesResponse
	Headers                             map[string][]string
	StatusCode                          int64
}
