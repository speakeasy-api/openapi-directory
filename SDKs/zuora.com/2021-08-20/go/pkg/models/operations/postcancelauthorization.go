package operations

import (
	"openapi/pkg/models/shared"
)

type PostCancelAuthorizationPathParams struct {
	PaymentMethodID string `pathParam:"style=simple,explode=false,name=payment-method-id"`
}

type PostCancelAuthorizationHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostCancelAuthorizationRequest struct {
	PathParams PostCancelAuthorizationPathParams
	Headers    PostCancelAuthorizationHeaders
	Request    shared.PostVoidAuthorize `request:"mediaType=application/json"`
}

type PostCancelAuthorizationResponse struct {
	ContentType               string
	Headers                   map[string][]string
	POSTVoidAuthorizeResponse *shared.PostVoidAuthorizeResponse
	StatusCode                int64
}
