package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutInvoiceAdjustmentRequest {
    public ObjectPutInvoiceAdjustmentPathParams pathParams;
    public ObjectPutInvoiceAdjustmentRequest withPathParams(ObjectPutInvoiceAdjustmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectPutInvoiceAdjustmentQueryParams queryParams;
    public ObjectPutInvoiceAdjustmentRequest withQueryParams(ObjectPutInvoiceAdjustmentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPutInvoiceAdjustmentHeaders headers;
    public ObjectPutInvoiceAdjustmentRequest withHeaders(ObjectPutInvoiceAdjustmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPutInvoiceAdjustmentRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}