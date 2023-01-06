package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDebitMemoPathParams struct {
	DebitMemoID string `pathParam:"style=simple,explode=false,name=debitMemoId"`
}

type DeleteDebitMemoHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type DeleteDebitMemoRequest struct {
	PathParams DeleteDebitMemoPathParams
	Headers    DeleteDebitMemoHeaders
}

type DeleteDebitMemoResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
