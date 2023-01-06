package operations

import (
	"openapi/pkg/models/shared"
)

type PostCreditMemoPdfPathParams struct {
	CreditMemoID string `pathParam:"style=simple,explode=false,name=creditMemoId"`
}

type PostCreditMemoPdfHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostCreditMemoPdfRequest struct {
	PathParams PostCreditMemoPdfPathParams
	Headers    PostCreditMemoPdfHeaders
}

type PostCreditMemoPdfResponse struct {
	ContentType         string
	Headers             map[string][]string
	POSTMemoPdfResponse *shared.PostMemoPdfResponse
	StatusCode          int64
}
