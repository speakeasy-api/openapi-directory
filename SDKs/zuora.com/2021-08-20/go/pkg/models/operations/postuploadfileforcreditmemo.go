package operations

import (
	"openapi/pkg/models/shared"
)

type PostUploadFileForCreditMemoPathParams struct {
	CreditMemoID string `pathParam:"style=simple,explode=false,name=creditMemoId"`
}

type PostUploadFileForCreditMemoHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostUploadFileForCreditMemoRequestBodyFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type PostUploadFileForCreditMemoRequestBody struct {
	File *PostUploadFileForCreditMemoRequestBodyFile `multipartForm:"file"`
}

type PostUploadFileForCreditMemoRequest struct {
	PathParams PostUploadFileForCreditMemoPathParams
	Headers    PostUploadFileForCreditMemoHeaders
	Request    *PostUploadFileForCreditMemoRequestBody `request:"mediaType=multipart/form-data"`
}

type PostUploadFileForCreditMemoResponse struct {
	ContentType            string
	Headers                map[string][]string
	POSTUploadFileResponse *shared.PostUploadFileResponse
	StatusCode             int64
}
