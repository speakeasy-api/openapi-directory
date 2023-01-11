package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEmailDebitMemoRequest {
    public PostEmailDebitMemoPathParams pathParams;
    public PostEmailDebitMemoRequest withPathParams(PostEmailDebitMemoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostEmailDebitMemoHeaders headers;
    public PostEmailDebitMemoRequest withHeaders(PostEmailDebitMemoHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostDebitMemoEmailType request;
    public PostEmailDebitMemoRequest withRequest(openapisdk.models.shared.PostDebitMemoEmailType request) {
        this.request = request;
        return this;
    }
}