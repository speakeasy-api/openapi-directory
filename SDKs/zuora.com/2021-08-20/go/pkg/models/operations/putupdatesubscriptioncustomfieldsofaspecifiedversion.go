package operations

import (
	"openapi/pkg/models/shared"
)

type PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionPathParams struct {
	SubscriptionNumber string `pathParam:"style=simple,explode=false,name=subscriptionNumber"`
	Version            string `pathParam:"style=simple,explode=false,name=version"`
}

type PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionRequest struct {
	PathParams PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionPathParams
	Headers    PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionHeaders
	Request    shared.PutSubscriptionPatchRequestType `request:"mediaType=application/json"`
}

type PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
