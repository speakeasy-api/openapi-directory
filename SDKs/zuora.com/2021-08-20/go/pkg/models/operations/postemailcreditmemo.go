package operations

import (
	"openapi/pkg/models/shared"
)

type PostEmailCreditMemoPathParams struct {
	CreditMemoID string `pathParam:"style=simple,explode=false,name=creditMemoId"`
}

type PostEmailCreditMemoHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostEmailCreditMemoRequest struct {
	PathParams PostEmailCreditMemoPathParams
	Headers    PostEmailCreditMemoHeaders
	Request    shared.PostCreditMemoEmailRequestType `request:"mediaType=application/json"`
}

type PostEmailCreditMemoResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
