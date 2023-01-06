package operations

import (
	"openapi/pkg/models/shared"
)

type PostQuotesDocumentHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostQuotesDocumentRequest struct {
	Headers PostQuotesDocumentHeaders
	Request shared.PostQuoteDocType `request:"mediaType=application/json"`
}

type PostQuotesDocumentResponse struct {
	ContentType              string
	Headers                  map[string][]string
	POSTQuoteDocResponseType *shared.PostQuoteDocResponseType
	StatusCode               int64
}
