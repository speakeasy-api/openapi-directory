package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUploadFileForDebitMemoRequest {
    public PostUploadFileForDebitMemoPathParams pathParams;
    public PostUploadFileForDebitMemoRequest withPathParams(PostUploadFileForDebitMemoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostUploadFileForDebitMemoHeaders headers;
    public PostUploadFileForDebitMemoRequest withHeaders(PostUploadFileForDebitMemoHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostUploadFileForDebitMemoRequestBody request;
    public PostUploadFileForDebitMemoRequest withRequest(PostUploadFileForDebitMemoRequestBody request) {
        this.request = request;
        return this;
    }
}