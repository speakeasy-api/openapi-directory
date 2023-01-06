package operations

import (
	"openapi/pkg/models/shared"
)

type GetJournalRunPathParams struct {
	JrNumber string `pathParam:"style=simple,explode=false,name=jr-number"`
}

type GetJournalRunHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetJournalRunRequest struct {
	PathParams GetJournalRunPathParams
	Headers    GetJournalRunHeaders
}

type GetJournalRunResponse struct {
	ContentType       string
	GETJournalRunType *shared.GetJournalRunType
	Headers           map[string][]string
	StatusCode        int64
}
