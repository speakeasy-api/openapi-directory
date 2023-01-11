package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPutInvoicePaymentRequest {
    public ObjectPutInvoicePaymentPathParams pathParams;
    public ObjectPutInvoicePaymentRequest withPathParams(ObjectPutInvoicePaymentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ObjectPutInvoicePaymentQueryParams queryParams;
    public ObjectPutInvoicePaymentRequest withQueryParams(ObjectPutInvoicePaymentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPutInvoicePaymentHeaders headers;
    public ObjectPutInvoicePaymentRequest withHeaders(ObjectPutInvoicePaymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProxyModifyInvoicePayment request;
    public ObjectPutInvoicePaymentRequest withRequest(openapisdk.models.shared.ProxyModifyInvoicePayment request) {
        this.request = request;
        return this;
    }
}