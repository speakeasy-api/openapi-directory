package operations

import (
	"openapi/pkg/models/shared"
)

type PutCancelSubscriptionPathParams struct {
	SubscriptionKey string `pathParam:"style=simple,explode=false,name=subscription-key"`
}

type PutCancelSubscriptionHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *string `header:"style=simple,explode=false,name=zuora-version"`
}

type PutCancelSubscriptionRequest struct {
	PathParams PutCancelSubscriptionPathParams
	Headers    PutCancelSubscriptionHeaders
	Request    shared.PostSubscriptionCancellationType `request:"mediaType=application/json"`
}

type PutCancelSubscriptionResponse struct {
	ContentType                              string
	Headers                                  map[string][]string
	POSTSubscriptionCancellationResponseType *shared.PostSubscriptionCancellationResponseType
	StatusCode                               int64
}
