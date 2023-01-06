package operations

import (
	"openapi/pkg/models/shared"
)

type PutBatchUpdateDebitMemosHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutBatchUpdateDebitMemosRequest struct {
	Headers PutBatchUpdateDebitMemosHeaders
	Request shared.PutBatchDebitMemosRequest `request:"mediaType=application/json"`
}

type PutBatchUpdateDebitMemosResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
