package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllSummaryJournalEntriesPathParams struct {
	JrNumber string `pathParam:"style=simple,explode=false,name=jr-number"`
}

type GetAllSummaryJournalEntriesQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetAllSummaryJournalEntriesHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type GetAllSummaryJournalEntriesRequest struct {
	PathParams  GetAllSummaryJournalEntriesPathParams
	QueryParams GetAllSummaryJournalEntriesQueryParams
	Headers     GetAllSummaryJournalEntriesHeaders
}

type GetAllSummaryJournalEntriesResponse struct {
	ContentType                       string
	GETJournalEntriesInJournalRunType *shared.GetJournalEntriesInJournalRunType
	Headers                           map[string][]string
	StatusCode                        int64
}
