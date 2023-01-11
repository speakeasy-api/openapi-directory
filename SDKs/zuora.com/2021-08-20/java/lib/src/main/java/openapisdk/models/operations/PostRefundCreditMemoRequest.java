package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRefundCreditMemoRequest {
    public PostRefundCreditMemoPathParams pathParams;
    public PostRefundCreditMemoRequest withPathParams(PostRefundCreditMemoPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostRefundCreditMemoHeaders headers;
    public PostRefundCreditMemoRequest withHeaders(PostRefundCreditMemoHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostRefundCreditMemoRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}