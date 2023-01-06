package operations

import (
	"openapi/pkg/models/shared"
)

type GetCreditMemoItemPartsPathParams struct {
	CreditMemoID string `pathParam:"style=simple,explode=false,name=creditMemoId"`
	Partid       string `pathParam:"style=simple,explode=false,name=partid"`
}

type GetCreditMemoItemPartsQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetCreditMemoItemPartsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetCreditMemoItemPartsRequest struct {
	PathParams  GetCreditMemoItemPartsPathParams
	QueryParams GetCreditMemoItemPartsQueryParams
	Headers     GetCreditMemoItemPartsHeaders
}

type GetCreditMemoItemPartsResponse struct {
	ContentType                          string
	GETCreditMemoItemPartsCollectionType *shared.GetCreditMemoItemPartsCollectionType
	Headers                              map[string][]string
	StatusCode                           int64
}
