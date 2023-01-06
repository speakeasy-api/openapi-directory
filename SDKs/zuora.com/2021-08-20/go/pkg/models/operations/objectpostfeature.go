package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPostFeatureQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPostFeatureHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPostFeatureRequest struct {
	QueryParams ObjectPostFeatureQueryParams
	Headers     ObjectPostFeatureHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type ObjectPostFeatureResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyBadRequestResponse     *shared.ProxyBadRequestResponse
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
