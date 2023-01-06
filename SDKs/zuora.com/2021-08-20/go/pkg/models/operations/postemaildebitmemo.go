package operations

import (
	"openapi/pkg/models/shared"
)

type PostEmailDebitMemoPathParams struct {
	DebitMemoID string `pathParam:"style=simple,explode=false,name=debitMemoId"`
}

type PostEmailDebitMemoHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostEmailDebitMemoRequest struct {
	PathParams PostEmailDebitMemoPathParams
	Headers    PostEmailDebitMemoHeaders
	Request    shared.PostDebitMemoEmailType `request:"mediaType=application/json"`
}

type PostEmailDebitMemoResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
