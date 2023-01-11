package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRSforCreditMemoItemManualDistributionRequest {
    public PostRSforCreditMemoItemManualDistributionPathParams pathParams;
    public PostRSforCreditMemoItemManualDistributionRequest withPathParams(PostRSforCreditMemoItemManualDistributionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostRSforCreditMemoItemManualDistributionHeaders headers;
    public PostRSforCreditMemoItemManualDistributionRequest withHeaders(PostRSforCreditMemoItemManualDistributionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostRSforCreditMemoItemManualDistributionRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}