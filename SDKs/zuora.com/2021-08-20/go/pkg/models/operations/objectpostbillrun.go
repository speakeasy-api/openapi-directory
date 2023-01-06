package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPostBillRunQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPostBillRunHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPostBillRunRequest struct {
	QueryParams ObjectPostBillRunQueryParams
	Headers     ObjectPostBillRunHeaders
	Request     shared.ProxyCreateBillRun `request:"mediaType=application/json"`
}

type ObjectPostBillRunResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyBadRequestResponse     *shared.ProxyBadRequestResponse
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
