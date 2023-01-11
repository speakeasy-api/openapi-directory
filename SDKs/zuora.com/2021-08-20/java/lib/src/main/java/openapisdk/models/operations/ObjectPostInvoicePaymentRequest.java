package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ObjectPostInvoicePaymentRequest {
    public ObjectPostInvoicePaymentQueryParams queryParams;
    public ObjectPostInvoicePaymentRequest withQueryParams(ObjectPostInvoicePaymentQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ObjectPostInvoicePaymentHeaders headers;
    public ObjectPostInvoicePaymentRequest withHeaders(ObjectPostInvoicePaymentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ProxyCreateInvoicePayment request;
    public ObjectPostInvoicePaymentRequest withRequest(openapisdk.models.shared.ProxyCreateInvoicePayment request) {
        this.request = request;
        return this;
    }
}