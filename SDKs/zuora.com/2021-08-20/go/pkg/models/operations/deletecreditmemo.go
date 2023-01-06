package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCreditMemoPathParams struct {
	CreditMemoID string `pathParam:"style=simple,explode=false,name=creditMemoId"`
}

type DeleteCreditMemoHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type DeleteCreditMemoRequest struct {
	PathParams DeleteCreditMemoPathParams
	Headers    DeleteCreditMemoHeaders
}

type DeleteCreditMemoResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
