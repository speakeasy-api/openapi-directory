package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPutSubscriptionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectPutSubscriptionQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPutSubscriptionHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPutSubscriptionRequest struct {
	PathParams  ObjectPutSubscriptionPathParams
	QueryParams ObjectPutSubscriptionQueryParams
	Headers     ObjectPutSubscriptionHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type ObjectPutSubscriptionResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
