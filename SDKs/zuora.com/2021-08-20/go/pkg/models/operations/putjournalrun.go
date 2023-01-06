package operations

import (
	"openapi/pkg/models/shared"
)

type PutJournalRunPathParams struct {
	JrNumber string `pathParam:"style=simple,explode=false,name=jr-number"`
}

type PutJournalRunHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PutJournalRunRequest struct {
	PathParams PutJournalRunPathParams
	Headers    PutJournalRunHeaders
}

type PutJournalRunResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
