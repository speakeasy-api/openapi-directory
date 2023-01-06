package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPostRefundQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPostRefundHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPostRefundRequest struct {
	QueryParams ObjectPostRefundQueryParams
	Headers     ObjectPostRefundHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
}

type ObjectPostRefundResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyBadRequestResponse     *shared.ProxyBadRequestResponse
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
