package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachmentsRequest {
    public PostAttachmentsQueryParams queryParams;
    public PostAttachmentsRequest withQueryParams(PostAttachmentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAttachmentsHeaders headers;
    public PostAttachmentsRequest withHeaders(PostAttachmentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostAttachmentsRequestBody request;
    public PostAttachmentsRequest withRequest(PostAttachmentsRequestBody request) {
        this.request = request;
        return this;
    }
}