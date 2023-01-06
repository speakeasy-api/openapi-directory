package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTaxationItemPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteTaxationItemHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type DeleteTaxationItemRequest struct {
	PathParams DeleteTaxationItemPathParams
	Headers    DeleteTaxationItemHeaders
}

type DeleteTaxationItemResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
