package operations

import (
	"openapi/pkg/models/shared"
)

type PostCmTaxationItemsPathParams struct {
	CreditMemoID string `pathParam:"style=simple,explode=false,name=creditMemoId"`
}

type PostCmTaxationItemsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostCmTaxationItemsRequest struct {
	PathParams PostCmTaxationItemsPathParams
	Headers    PostCmTaxationItemsHeaders
	Request    shared.PostTaxationItemListForCmType `request:"mediaType=application/json"`
}

type PostCmTaxationItemsResponse struct {
	ContentType             string
	GETTaxationItemListType *shared.GetTaxationItemListType
	Headers                 map[string][]string
	StatusCode              int64
}
