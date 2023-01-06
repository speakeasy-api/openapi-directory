package operations

import (
	"openapi/pkg/models/shared"
)

type PostJournalRunHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostJournalRunRequest struct {
	Headers PostJournalRunHeaders
	Request shared.PostJournalRunType `request:"mediaType=application/json"`
}

type PostJournalRunResponse struct {
	ContentType                string
	Headers                    map[string][]string
	POSTJournalRunResponseType *shared.PostJournalRunResponseType
	StatusCode                 int64
}
