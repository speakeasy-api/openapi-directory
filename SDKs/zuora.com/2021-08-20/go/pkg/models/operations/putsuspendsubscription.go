package operations

import (
	"openapi/pkg/models/shared"
)

type PutSuspendSubscriptionPathParams struct {
	SubscriptionKey string `pathParam:"style=simple,explode=false,name=subscription-key"`
}

type PutSuspendSubscriptionHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *string `header:"style=simple,explode=false,name=zuora-version"`
}

type PutSuspendSubscriptionRequest struct {
	PathParams PutSuspendSubscriptionPathParams
	Headers    PutSuspendSubscriptionHeaders
	Request    shared.PutSubscriptionSuspendType `request:"mediaType=application/json"`
}

type PutSuspendSubscriptionResponse struct {
	ContentType                        string
	Headers                            map[string][]string
	PUTSubscriptionSuspendResponseType *shared.PutSubscriptionSuspendResponseType
	StatusCode                         int64
}
