package operations

import (
	"openapi/pkg/models/shared"
)

type GetCreditMemoPartsPathParams struct {
	CreditMemoID string `pathParam:"style=simple,explode=false,name=creditMemoId"`
}

type GetCreditMemoPartsQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetCreditMemoPartsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetCreditMemoPartsRequest struct {
	PathParams  GetCreditMemoPartsPathParams
	QueryParams GetCreditMemoPartsQueryParams
	Headers     GetCreditMemoPartsHeaders
}

type GetCreditMemoPartsResponse struct {
	ContentType                      string
	GETCreditMemoPartsCollectionType *shared.GetCreditMemoPartsCollectionType
	Headers                          map[string][]string
	StatusCode                       int64
}
