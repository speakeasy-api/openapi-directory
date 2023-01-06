package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectGetSubscriptionProductFeaturePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectGetSubscriptionProductFeatureQueryParams struct {
	Fields *string `queryParam:"style=form,explode=true,name=fields"`
}

type ObjectGetSubscriptionProductFeatureHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectGetSubscriptionProductFeatureRequest struct {
	PathParams  ObjectGetSubscriptionProductFeaturePathParams
	QueryParams ObjectGetSubscriptionProductFeatureQueryParams
	Headers     ObjectGetSubscriptionProductFeatureHeaders
}

type ObjectGetSubscriptionProductFeatureResponse struct {
	ContentType                        string
	Headers                            map[string][]string
	ProxyGetSubscriptionProductFeature map[string]interface{}
	ProxyNoDataResponse                *shared.ProxyNoDataResponse
	ProxyUnauthorizedResponse          *shared.ProxyUnauthorizedResponse
	StatusCode                         int64
}
