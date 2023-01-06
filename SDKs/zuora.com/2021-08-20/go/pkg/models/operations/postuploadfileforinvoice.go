package operations

import (
	"openapi/pkg/models/shared"
)

type PostUploadFileForInvoicePathParams struct {
	InvoiceID string `pathParam:"style=simple,explode=false,name=invoiceId"`
}

type PostUploadFileForInvoiceHeaders struct {
	ZuoraEntityIds *string `header:"style=simple,explode=false,name=Zuora-Entity-Ids"`
	ZuoraTrackID   *string `header:"style=simple,explode=false,name=Zuora-Track-Id"`
}

type PostUploadFileForInvoiceRequestBodyFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type PostUploadFileForInvoiceRequestBody struct {
	File *PostUploadFileForInvoiceRequestBodyFile `multipartForm:"file"`
}

type PostUploadFileForInvoiceRequest struct {
	PathParams PostUploadFileForInvoicePathParams
	Headers    PostUploadFileForInvoiceHeaders
	Request    *PostUploadFileForInvoiceRequestBody `request:"mediaType=multipart/form-data"`
}

type PostUploadFileForInvoiceResponse struct {
	ContentType            string
	Headers                map[string][]string
	POSTUploadFileResponse *shared.PostUploadFileResponse
	StatusCode             int64
}
