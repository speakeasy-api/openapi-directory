package operations

import (
	"openapi/pkg/models/shared"
)

type ObjectDeleteBillRunPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ObjectDeleteBillRunHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type ObjectDeleteBillRunRequest struct {
	PathParams ObjectDeleteBillRunPathParams
	Headers    ObjectDeleteBillRunHeaders
}

type ObjectDeleteBillRunResponse struct {
	ContentType               string
	Headers                   map[string][]string
	ProxyDeleteResponse       *shared.ProxyDeleteResponse
	ProxyUnauthorizedResponse *shared.ProxyUnauthorizedResponse
	StatusCode                int64
}
