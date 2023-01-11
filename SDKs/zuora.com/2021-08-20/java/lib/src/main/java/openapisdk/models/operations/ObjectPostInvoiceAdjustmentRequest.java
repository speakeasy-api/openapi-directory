package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPostInvoiceAdjustmentRequest {
    public ObjectPostInvoiceAdjustmentQueryParams queryParams;
    public ObjectPostInvoiceAdjustmentRequest withQueryParams(ObjectPostInvoiceAdjustmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPostInvoiceAdjustmentHeaders headers;
    public ObjectPostInvoiceAdjustmentRequest withHeaders(ObjectPostInvoiceAdjustmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPostInvoiceAdjustmentRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}