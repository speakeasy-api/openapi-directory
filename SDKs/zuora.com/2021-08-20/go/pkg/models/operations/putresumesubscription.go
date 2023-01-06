package operations

import (
	"openapi/pkg/models/shared"
)

type PutResumeSubscriptionPathParams struct {
	SubscriptionKey string `pathParam:"style=simple,explode=false,name=subscription-key"`
}

type PutResumeSubscriptionHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *string `header:"style=simple,explode=false,name=zuora-version"`
}

type PutResumeSubscriptionRequest struct {
	PathParams PutResumeSubscriptionPathParams
	Headers    PutResumeSubscriptionHeaders
	Request    shared.PutSubscriptionResumeType `request:"mediaType=application/json"`
}

type PutResumeSubscriptionResponse struct {
	ContentType                       string
	Headers                           map[string][]string
	PUTSubscriptionResumeResponseType *shared.PutSubscriptionResumeResponseType
	StatusCode                        int64
}
