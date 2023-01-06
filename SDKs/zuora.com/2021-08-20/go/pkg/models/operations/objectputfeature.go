package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPutFeaturePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectPutFeatureQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPutFeatureHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPutFeatureRequest struct {
	PathParams  ObjectPutFeaturePathParams
	QueryParams ObjectPutFeatureQueryParams
	Headers     ObjectPutFeatureHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type ObjectPutFeatureResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyBadRequestResponse     *shared.ProxyBadRequestResponse
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
