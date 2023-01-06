package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteJournalRunPathParams struct {
	JrNumber string `pathParam:"style=simple,explode=false,name=jr-number"`
}

type DeleteJournalRunHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type DeleteJournalRunRequest struct {
	PathParams DeleteJournalRunPathParams
	Headers    DeleteJournalRunHeaders
}

type DeleteJournalRunResponse struct {
	CommonResponseType *shared.CommonResponseType
	ContentType        string
	Headers            map[string][]string
	StatusCode         int64
}
