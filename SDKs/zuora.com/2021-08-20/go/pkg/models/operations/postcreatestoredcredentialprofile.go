package operations

import (
	"openapi/pkg/models/shared"
)

type PostCreateStoredCredentialProfilePathParams struct {
	PaymentMethodID string `pathParam:"style=simple,explode=false,name=payment-method-id"`
}

type PostCreateStoredCredentialProfileHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostCreateStoredCredentialProfileRequest struct {
	PathParams PostCreateStoredCredentialProfilePathParams
	Headers    PostCreateStoredCredentialProfileHeaders
	Request    shared.CreateStoredCredentialProfileRequest `request:"mediaType=application/json"`
}

type PostCreateStoredCredentialProfileResponse struct {
	ContentType                             string
	Headers                                 map[string][]string
	ModifiedStoredCredentialProfileResponse *shared.ModifiedStoredCredentialProfileResponse
	StatusCode                              int64
}
