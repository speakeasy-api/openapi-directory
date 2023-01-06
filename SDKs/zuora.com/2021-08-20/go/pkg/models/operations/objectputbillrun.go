package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectPutBillRunPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectPutBillRunQueryParams struct {
	RejectUnknownFields *bool `queryParam:"style=form,explode=true,name=rejectUnknownFields"`
}

type ObjectPutBillRunHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectPutBillRunRequest struct {
	PathParams  ObjectPutBillRunPathParams
	QueryParams ObjectPutBillRunQueryParams
	Headers     ObjectPutBillRunHeaders
	Request     shared.ProxyModifyBillRun `request:"mediaType=application/json"`
}

type ObjectPutBillRunResponse struct {
	ContentType                 string
	Headers                     map[string][]string
	ProxyCreateOrModifyResponse *shared.ProxyCreateOrModifyResponse
	ProxyUnauthorizedResponse   *shared.ProxyUnauthorizedResponse
	StatusCode                  int64
}
