package openapisdk.models.operations;



public class GetAccountBillingInvoiceResponse {
    public byte[] body;
    public GetAccountBillingInvoiceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAccountBillingInvoiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAccountBillingInvoiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAccountBillingInvoice200ApplicationJson getAccountBillingInvoice200ApplicationJSONObject;
    public GetAccountBillingInvoiceResponse withGetAccountBillingInvoice200ApplicationJsonObject(GetAccountBillingInvoice200ApplicationJson getAccountBillingInvoice200ApplicationJSONObject) {
        this.getAccountBillingInvoice200ApplicationJSONObject = getAccountBillingInvoice200ApplicationJSONObject;
        return this;
    }
}