package operations

import (
	"openapi/pkg/models/shared"
)

type DownloadDocumentPathParams struct {
	DocumentID string `pathParam:"style=simple,explode=false,name=documentId"`
}

type DownloadDocumentRequest struct {
	PathParams DownloadDocumentPathParams
}

type DownloadDocumentResponse struct {
	ContentType              string
	DocumentDownloadResponse *shared.DocumentDownloadResponse
	StatusCode               int64
	YodleeError              *shared.YodleeError
}
