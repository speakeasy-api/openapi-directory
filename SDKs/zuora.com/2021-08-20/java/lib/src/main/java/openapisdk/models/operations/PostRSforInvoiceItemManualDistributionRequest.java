package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRSforInvoiceItemManualDistributionRequest {
    public PostRSforInvoiceItemManualDistributionPathParams pathParams;
    public PostRSforInvoiceItemManualDistributionRequest withPathParams(PostRSforInvoiceItemManualDistributionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostRSforInvoiceItemManualDistributionHeaders headers;
    public PostRSforInvoiceItemManualDistributionRequest withHeaders(PostRSforInvoiceItemManualDistributionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostRSforInvoiceItemManualDistributionRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}