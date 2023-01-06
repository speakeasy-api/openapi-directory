package operations

import (
	"openapi/pkg/models/shared"
)

type PostSubscriptionHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *string `header:"style=simple,explode=false,name=zuora-version"`
}

type PostSubscriptionRequest struct {
	Headers PostSubscriptionHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostSubscriptionResponse struct {
	ContentType                  string
	Headers                      map[string][]string
	POSTSubscriptionResponseType *shared.PostSubscriptionResponseType
	StatusCode                   int64
}
