package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPostTaxationItemQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPostTaxationItemHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPostTaxationItemRequest struct {
	QueryParams ObjectPostTaxationItemQueryParams
	Headers     ObjectPostTaxationItemHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type ObjectPostTaxationItemResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyBadRequestResponse     *shared.ProxyBadRequestResponse
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
