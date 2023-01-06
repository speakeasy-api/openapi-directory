package operations

import (
	"openapi/pkg/models/shared"
)

type PostSequenceSetsHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostSequenceSetsRequest struct {
	Headers PostSequenceSetsHeaders
	Request shared.PostSequenceSetsRequest `request:"mediaType=application/json"`
}

type PostSequenceSetsResponse struct {
	ContentType              string
	Headers                  map[string][]string
	POSTSequenceSetsResponse *shared.PostSequenceSetsResponse
	StatusCode               int64
}
