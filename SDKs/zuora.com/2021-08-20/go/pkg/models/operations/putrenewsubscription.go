package operations

import (
	"openapi/pkg/models/shared"
)

type PutRenewSubscriptionPathParams struct {
	SubscriptionKey string `pathParam:"style=simple,explode=false,name=subscription-key"`
}

type PutRenewSubscriptionHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *string `header:"style=simple,explode=false,name=zuora-version"`
}

type PutRenewSubscriptionRequest struct {
	PathParams PutRenewSubscriptionPathParams
	Headers    PutRenewSubscriptionHeaders
	Request    shared.PutRenewSubscriptionType `request:"mediaType=application/json"`
}

type PutRenewSubscriptionResponse struct {
	ContentType                      string
	Headers                          map[string][]string
	PUTRenewSubscriptionResponseType *shared.PutRenewSubscriptionResponseType
	StatusCode                       int64
}
