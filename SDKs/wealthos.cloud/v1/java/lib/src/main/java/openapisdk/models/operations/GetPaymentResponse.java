package openapisdk.models.operations;



public class GetPaymentResponse {
    public String contentType;
    public GetPaymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object rootTypeForPayments;
    public GetPaymentResponse withRootTypeForPayments(Object rootTypeForPayments) {
        this.rootTypeForPayments = rootTypeForPayments;
        return this;
    }
    public Long statusCode;
    public GetPaymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getPayment400ApplicationJSONAny;
    public GetPaymentResponse withGetPayment400ApplicationJsonAny(Object getPayment400ApplicationJSONAny) {
        this.getPayment400ApplicationJSONAny = getPayment400ApplicationJSONAny;
        return this;
    }
    public Object getPayment401ApplicationJSONAny;
    public GetPaymentResponse withGetPayment401ApplicationJsonAny(Object getPayment401ApplicationJSONAny) {
        this.getPayment401ApplicationJSONAny = getPayment401ApplicationJSONAny;
        return this;
    }
    public Object getPayment403ApplicationJSONAny;
    public GetPaymentResponse withGetPayment403ApplicationJsonAny(Object getPayment403ApplicationJSONAny) {
        this.getPayment403ApplicationJSONAny = getPayment403ApplicationJSONAny;
        return this;
    }
    public Object getPayment404ApplicationJSONAny;
    public GetPaymentResponse withGetPayment404ApplicationJsonAny(Object getPayment404ApplicationJSONAny) {
        this.getPayment404ApplicationJSONAny = getPayment404ApplicationJSONAny;
        return this;
    }
    public Object getPayment429ApplicationJSONAny;
    public GetPaymentResponse withGetPayment429ApplicationJsonAny(Object getPayment429ApplicationJSONAny) {
        this.getPayment429ApplicationJSONAny = getPayment429ApplicationJSONAny;
        return this;
    }
    public Object getPayment500ApplicationJSONAny;
    public GetPaymentResponse withGetPayment500ApplicationJsonAny(Object getPayment500ApplicationJSONAny) {
        this.getPayment500ApplicationJSONAny = getPayment500ApplicationJSONAny;
        return this;
    }
}