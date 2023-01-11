package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRSforInvoiceItemAdjustmentManualDistributionRequest {
    public PostRSforInvoiceItemAdjustmentManualDistributionPathParams pathParams;
    public PostRSforInvoiceItemAdjustmentManualDistributionRequest withPathParams(PostRSforInvoiceItemAdjustmentManualDistributionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostRSforInvoiceItemAdjustmentManualDistributionHeaders headers;
    public PostRSforInvoiceItemAdjustmentManualDistributionRequest withHeaders(PostRSforInvoiceItemAdjustmentManualDistributionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostRSforInvoiceItemAdjustmentManualDistributionRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}