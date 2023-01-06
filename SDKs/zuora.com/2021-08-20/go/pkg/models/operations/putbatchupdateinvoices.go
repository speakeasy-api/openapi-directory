package operations

import (
	"openapi/pkg/models/shared"
)

type PutBatchUpdateInvoicesHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutBatchUpdateInvoicesRequest struct {
	Headers PutBatchUpdateInvoicesHeaders
	Request shared.PutBatchInvoiceType `request:"mediaType=application/json"`
}

type PutBatchUpdateInvoicesResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
