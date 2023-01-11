package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUploadFileForCreditMemoRequest {
    public PostUploadFileForCreditMemoPathParams pathParams;
    public PostUploadFileForCreditMemoRequest withPathParams(PostUploadFileForCreditMemoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostUploadFileForCreditMemoHeaders headers;
    public PostUploadFileForCreditMemoRequest withHeaders(PostUploadFileForCreditMemoHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostUploadFileForCreditMemoRequestBody request;
    public PostUploadFileForCreditMemoRequest withRequest(PostUploadFileForCreditMemoRequestBody request) {
        this.request = request;
        return this;
    }
}