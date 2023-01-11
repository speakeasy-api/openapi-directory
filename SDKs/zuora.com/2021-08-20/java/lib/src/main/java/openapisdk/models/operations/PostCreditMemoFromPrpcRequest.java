package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreditMemoFromPrpcRequest {
    public PostCreditMemoFromPrpcHeaders headers;
    public PostCreditMemoFromPrpcRequest withHeaders(PostCreditMemoFromPrpcHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostCreditMemoFromPrpcRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}