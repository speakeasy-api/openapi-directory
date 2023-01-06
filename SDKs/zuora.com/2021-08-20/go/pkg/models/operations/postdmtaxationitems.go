package operations

import (
	"openapi/pkg/models/shared"
)

type PostDmTaxationItemsPathParams struct {
	DebitMemoID string `pathParam:"style=simple,explode=false,name=debitMemoId"`
}

type PostDmTaxationItemsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostDmTaxationItemsRequest struct {
	PathParams PostDmTaxationItemsPathParams
	Headers    PostDmTaxationItemsHeaders
	Request    shared.PostTaxationItemListForDmType `request:"mediaType=application/json"`
}

type PostDmTaxationItemsResponse struct {
	ContentType             string
	GETTaxationItemListType *shared.GetTaxationItemListType
	Headers                 map[string][]string
	StatusCode              int64
}
