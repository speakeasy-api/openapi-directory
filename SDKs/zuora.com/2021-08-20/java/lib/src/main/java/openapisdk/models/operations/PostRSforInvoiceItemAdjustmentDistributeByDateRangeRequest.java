package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRSforInvoiceItemAdjustmentDistributeByDateRangeRequest {
    public PostRSforInvoiceItemAdjustmentDistributeByDateRangePathParams pathParams;
    public PostRSforInvoiceItemAdjustmentDistributeByDateRangeRequest withPathParams(PostRSforInvoiceItemAdjustmentDistributeByDateRangePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PostRSforInvoiceItemAdjustmentDistributeByDateRangeHeaders headers;
    public PostRSforInvoiceItemAdjustmentDistributeByDateRangeRequest withHeaders(PostRSforInvoiceItemAdjustmentDistributeByDateRangeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public PostRSforInvoiceItemAdjustmentDistributeByDateRangeRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}