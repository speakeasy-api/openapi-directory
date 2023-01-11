package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEmailCreditMemoRequest {
    public PostEmailCreditMemoPathParams pathParams;
    public PostEmailCreditMemoRequest withPathParams(PostEmailCreditMemoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostEmailCreditMemoHeaders headers;
    public PostEmailCreditMemoRequest withHeaders(PostEmailCreditMemoHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PostCreditMemoEmailRequestType request;
    public PostEmailCreditMemoRequest withRequest(openapisdk.models.shared.PostCreditMemoEmailRequestType request) {
        this.request = request;
        return this;
    }
}