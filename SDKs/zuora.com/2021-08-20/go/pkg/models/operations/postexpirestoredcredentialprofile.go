package operations

import (
	"openapi/pkg/models/shared"
)

type PostExpireStoredCredentialProfilePathParams struct {
	PaymentMethodID string `pathParam:"style=simple,explode=false,name=payment-method-id"`
	ProfileNumber   int64  `pathParam:"style=simple,explode=false,name=profile-number"`
}

type PostExpireStoredCredentialProfileHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostExpireStoredCredentialProfileRequest struct {
	PathParams PostExpireStoredCredentialProfilePathParams
	Headers    PostExpireStoredCredentialProfileHeaders
}

type PostExpireStoredCredentialProfileResponse struct {
	ContentType                             string
	Headers                                 map[string][]string
	ModifiedStoredCredentialProfileResponse *shared.ModifiedStoredCredentialProfileResponse
	StatusCode                              int64
}
