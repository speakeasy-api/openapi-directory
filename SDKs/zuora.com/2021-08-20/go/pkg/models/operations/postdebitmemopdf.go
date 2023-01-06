package operations

import (
	"openapi/pkg/models/shared"
)

type PostDebitMemoPdfPathParams struct {
	DebitMemoID string `pathParam:"style=simple,explode=false,name=debitMemoId"`
}

type PostDebitMemoPdfHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostDebitMemoPdfRequest struct {
	PathParams PostDebitMemoPdfPathParams
	Headers    PostDebitMemoPdfHeaders
}

type PostDebitMemoPdfResponse struct {
	ContentType         string
	Headers             map[string][]string
	POSTMemoPdfResponse *shared.PostMemoPdfResponse
	StatusCode          int64
}
