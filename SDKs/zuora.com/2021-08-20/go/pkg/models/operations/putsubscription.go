package operations

import (
	"openapi/pkg/models/shared"
)

type PutSubscriptionPathParams struct {
	SubscriptionKey string `pathParam:"style=simple,explode=false,name=subscription-key"`
}

type PutSubscriptionHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *string `header:"style=simple,explode=false,name=zuora-version"`
}

type PutSubscriptionRequest struct {
	PathParams PutSubscriptionPathParams
	Headers    PutSubscriptionHeaders
	Request    map[string]interface{} `request:"mediaType=application/json"`
}

type PutSubscriptionResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	PUTSubscriptionResponseType *shared.PutSubscriptionResponseType
	StatusCode                  int64
}
