package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDocumentPathParams struct {
	DocumentID string `pathParam:"style=simple,explode=false,name=documentId"`
}

type DeleteDocumentRequest struct {
	PathParams DeleteDocumentPathParams
}

type DeleteDocumentResponse struct {
	ContentType string
	StatusCode  int64
	YodleeError *shared.YodleeError
}
