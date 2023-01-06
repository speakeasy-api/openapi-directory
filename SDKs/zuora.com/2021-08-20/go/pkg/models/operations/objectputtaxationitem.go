package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPutTaxationItemPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectPutTaxationItemQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPutTaxationItemHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPutTaxationItemRequest struct {
	PathParams  ObjectPutTaxationItemPathParams
	QueryParams ObjectPutTaxationItemQueryParams
	Headers     ObjectPutTaxationItemHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type ObjectPutTaxationItemResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
