package operations

import (
	"openapi/pkg/models/shared"
)

type PostPreviewSubscriptionHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
	ZuoraVersion   *string `header:"style=simple,explode=false,name=zuora-version"`
}

type PostPreviewSubscriptionRequest struct {
	Headers PostPreviewSubscriptionHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type PostPreviewSubscriptionResponse struct {
	ContentType                         string
	Headers                             map[string][]string
	POSTSubscriptionPreviewResponseType *shared.PostSubscriptionPreviewResponseType
	StatusCode                          int64
}
