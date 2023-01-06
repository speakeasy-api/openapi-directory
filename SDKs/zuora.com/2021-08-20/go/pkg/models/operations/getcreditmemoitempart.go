package operations

import (
	"openapi/pkg/models/shared"
)

type GetCreditMemoItemPartPathParams struct {
	CreditMemoID string `pathParam:"style=simple,explode=false,name=creditMemoId"`
	Itempartid   string `pathParam:"style=simple,explode=false,name=itempartid"`
	Partid       string `pathParam:"style=simple,explode=false,name=partid"`
}

type GetCreditMemoItemPartHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetCreditMemoItemPartRequest struct {
	PathParams GetCreditMemoItemPartPathParams
	Headers    GetCreditMemoItemPartHeaders
}

type GetCreditMemoItemPartResponse struct {
	ContentType               string
	GETCreditMemoItemPartType *shared.GetCreditMemoItemPartType
	Headers                   map[string][]string
	StatusCode                int64
}
