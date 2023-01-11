package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutInvoiceRequest {
    public ObjectPutInvoicePathParams pathParams;
    public ObjectPutInvoiceRequest withPathParams(ObjectPutInvoicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectPutInvoiceQueryParams queryParams;
    public ObjectPutInvoiceRequest withQueryParams(ObjectPutInvoiceQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPutInvoiceHeaders headers;
    public ObjectPutInvoiceRequest withHeaders(ObjectPutInvoiceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ObjectPutInvoiceRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}