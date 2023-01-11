package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRSforDebitMemoItemDistributeByDateRangeRequest {
    public PostRSforDebitMemoItemDistributeByDateRangePathParams pathParams;
    public PostRSforDebitMemoItemDistributeByDateRangeRequest withPathParams(PostRSforDebitMemoItemDistributeByDateRangePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostRSforDebitMemoItemDistributeByDateRangeHeaders headers;
    public PostRSforDebitMemoItemDistributeByDateRangeRequest withHeaders(PostRSforDebitMemoItemDistributeByDateRangeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostRSforDebitMemoItemDistributeByDateRangeRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}