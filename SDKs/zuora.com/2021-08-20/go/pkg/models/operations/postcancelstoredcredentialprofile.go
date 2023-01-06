package operations

import (
	"openapi/pkg/models/shared"
)

type PostCancelStoredCredentialProfilePathParams struct {
	PaymentMethodID string `pathParam:"style=simple,explode=false,name=payment-method-id"`
	ProfileNumber   int64  `pathParam:"style=simple,explode=false,name=profile-number"`
}

type PostCancelStoredCredentialProfileHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostCancelStoredCredentialProfileRequest struct {
	PathParams PostCancelStoredCredentialProfilePathParams
	Headers    PostCancelStoredCredentialProfileHeaders
}

type PostCancelStoredCredentialProfileResponse struct {
	ContentType                             string
	Headers                                 map[string][]string
	ModifiedStoredCredentialProfileResponse *shared.ModifiedStoredCredentialProfileResponse
	StatusCode                              int64
}
