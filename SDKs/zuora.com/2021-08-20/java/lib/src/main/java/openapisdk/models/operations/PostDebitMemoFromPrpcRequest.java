package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDebitMemoFromPrpcRequest {
    public PostDebitMemoFromPrpcHeaders headers;
    public PostDebitMemoFromPrpcRequest withHeaders(PostDebitMemoFromPrpcHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostDebitMemoFromPrpcRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}