package operations

import (
	"openapi/pkg/models/shared"
)

type GetCreditMemoPartPathParams struct {
	CreditMemoID string `pathParam:"style=simple,explode=false,name=creditMemoId"`
	Partid       string `pathParam:"style=simple,explode=false,name=partid"`
}

type GetCreditMemoPartHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetCreditMemoPartRequest struct {
	PathParams GetCreditMemoPartPathParams
	Headers    GetCreditMemoPartHeaders
}

type GetCreditMemoPartResponse struct {
	ContentType           string
	GETCreditMemoPartType *shared.GetCreditMemoPartType
	Headers               map[string][]string
	StatusCode            int64
}
