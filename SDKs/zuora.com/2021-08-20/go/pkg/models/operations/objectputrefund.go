package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPutRefundPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectPutRefundQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPutRefundHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPutRefundRequest struct {
	PathParams  ObjectPutRefundPathParams
	QueryParams ObjectPutRefundQueryParams
	Headers     ObjectPutRefundHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type ObjectPutRefundResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
