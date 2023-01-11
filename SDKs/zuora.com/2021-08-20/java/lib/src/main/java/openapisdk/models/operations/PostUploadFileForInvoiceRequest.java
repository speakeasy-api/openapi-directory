package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUploadFileForInvoiceRequest {
    public PostUploadFileForInvoicePathParams pathParams;
    public PostUploadFileForInvoiceRequest withPathParams(PostUploadFileForInvoicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostUploadFileForInvoiceHeaders headers;
    public PostUploadFileForInvoiceRequest withHeaders(PostUploadFileForInvoiceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostUploadFileForInvoiceRequestBody request;
    public PostUploadFileForInvoiceRequest withRequest(PostUploadFileForInvoiceRequestBody request) {
        this.request = request;
        return this;
    }
}