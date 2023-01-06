package operations

import (
	"openapi/pkg/models/shared"
)

type PutUpdateOrderCustomFieldsPathParams struct {
	OrderNumber string `pathParam:"style=simple,explode=false,name=orderNumber"`
}

type PutUpdateOrderCustomFieldsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutUpdateOrderCustomFieldsRequest struct {
	PathParams PutUpdateOrderCustomFieldsPathParams
	Headers    PutUpdateOrderCustomFieldsHeaders
	Request    shared.PutOrderPatchRequestType `request:"mediaType=application/json"`
}

type PutUpdateOrderCustomFieldsResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
