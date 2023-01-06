package operations

import (
	"openapi/pkg/models/shared"
)

type PutUpdateSubscriptionCustomFieldsPathParams struct {
	SubscriptionNumber string `pathParam:"style=simple,explode=false,name=subscriptionNumber"`
}

type PutUpdateSubscriptionCustomFieldsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutUpdateSubscriptionCustomFieldsRequest struct {
	PathParams PutUpdateSubscriptionCustomFieldsPathParams
	Headers    PutUpdateSubscriptionCustomFieldsHeaders
	Request    shared.PutSubscriptionPatchRequestType `request:"mediaType=application/json"`
}

type PutUpdateSubscriptionCustomFieldsResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
