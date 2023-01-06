package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectDeleteSubscriptionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectDeleteSubscriptionHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectDeleteSubscriptionRequest struct {
	PathParams ObjectDeleteSubscriptionPathParams
	Headers    ObjectDeleteSubscriptionHeaders
}

type ObjectDeleteSubscriptionResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyDeleteResponse       *shared.ProxyDeleteResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
