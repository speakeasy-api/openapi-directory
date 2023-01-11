package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRSforCreditMemoItemDistributeByDateRangeRequest {
    public PostRSforCreditMemoItemDistributeByDateRangePathParams pathParams;
    public PostRSforCreditMemoItemDistributeByDateRangeRequest withPathParams(PostRSforCreditMemoItemDistributeByDateRangePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostRSforCreditMemoItemDistributeByDateRangeHeaders headers;
    public PostRSforCreditMemoItemDistributeByDateRangeRequest withHeaders(PostRSforCreditMemoItemDistributeByDateRangeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostRSforCreditMemoItemDistributeByDateRangeRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}