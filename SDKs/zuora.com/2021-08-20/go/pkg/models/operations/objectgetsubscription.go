package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetSubscriptionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetSubscriptionQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetSubscriptionHeaders struct {
	XZuoraWSDLVersion *string `header:"style=simple,explode=false,name=X-Zuora-WSDL-Version"`
	ZuoraEntityIds    *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID      *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetSubscriptionRequest struct {
	PathParams  ObjectGetSubscriptionPathParams
	QueryParams ObjectGetSubscriptionQueryParams
	Headers     ObjectGetSubscriptionHeaders
}

type ObjectGetSubscriptionResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyGetSubscription      map[string]interface{}
	ProxyNoDataResponse       *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
