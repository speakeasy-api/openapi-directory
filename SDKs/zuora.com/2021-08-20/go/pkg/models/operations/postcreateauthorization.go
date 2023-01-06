package operations

import (
	"openapi/pkg/models/shared"
)

type PostCreateAuthorizationPathParams struct {
	PaymentMethodID string `pathParam:"style=simple,explode=false,name=payment-method-id"`
}

type PostCreateAuthorizationHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostCreateAuthorizationRequest struct {
	PathParams PostCreateAuthorizationPathParams
	Headers    PostCreateAuthorizationHeaders
	Request    shared.PostDelayAuthorizeCapture `request:"mediaType=application/json"`
}

type PostCreateAuthorizationResponse struct {
	ContentType           string
	Headers               map[string][]string
	POSTAuthorizeResponse *shared.PostAuthorizeResponse
	StatusCode            int64
}
