package operations

import (
	"openapi/pkg/models/shared"
)

type PostUploadFileForDebitMemoPathParams struct {
	DebitMemoID string `pathParam:"style=simple,explode=false,name=debitMemoId"`
}

type PostUploadFileForDebitMemoHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostUploadFileForDebitMemoRequestBodyFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type PostUploadFileForDebitMemoRequestBody struct {
	File *PostUploadFileForDebitMemoRequestBodyFile `multipartForm:"file"`
}

type PostUploadFileForDebitMemoRequest struct {
	PathParams PostUploadFileForDebitMemoPathParams
	Headers    PostUploadFileForDebitMemoHeaders
	Request    *PostUploadFileForDebitMemoRequestBody `request:"mediaType=multipart/form-data"`
}

type PostUploadFileForDebitMemoResponse struct {
	ContentType            string
	Headers                map[string][]string
	POSTUploadFileResponse *shared.PostUploadFileResponse
	StatusCode             int64
}
