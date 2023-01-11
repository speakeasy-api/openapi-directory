package openapisdk.models.operations;



public class GetPotPaymentsResponse {
    public String contentType;
    public GetPotPaymentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPotPaymentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetPotPayments200ApplicationJson getPotPayments200ApplicationJSONObject;
    public GetPotPaymentsResponse withGetPotPayments200ApplicationJsonObject(GetPotPayments200ApplicationJson getPotPayments200ApplicationJSONObject) {
        this.getPotPayments200ApplicationJSONObject = getPotPayments200ApplicationJSONObject;
        return this;
    }
    public Object getPotPayments401ApplicationJSONAny;
    public GetPotPaymentsResponse withGetPotPayments401ApplicationJsonAny(Object getPotPayments401ApplicationJSONAny) {
        this.getPotPayments401ApplicationJSONAny = getPotPayments401ApplicationJSONAny;
        return this;
    }
    public Object getPotPayments403ApplicationJSONAny;
    public GetPotPaymentsResponse withGetPotPayments403ApplicationJsonAny(Object getPotPayments403ApplicationJSONAny) {
        this.getPotPayments403ApplicationJSONAny = getPotPayments403ApplicationJSONAny;
        return this;
    }
    public Object getPotPayments404ApplicationJSONAny;
    public GetPotPaymentsResponse withGetPotPayments404ApplicationJsonAny(Object getPotPayments404ApplicationJSONAny) {
        this.getPotPayments404ApplicationJSONAny = getPotPayments404ApplicationJSONAny;
        return this;
    }
    public Object getPotPayments429ApplicationJSONAny;
    public GetPotPaymentsResponse withGetPotPayments429ApplicationJsonAny(Object getPotPayments429ApplicationJSONAny) {
        this.getPotPayments429ApplicationJSONAny = getPotPayments429ApplicationJSONAny;
        return this;
    }
    public Object getPotPayments500ApplicationJSONAny;
    public GetPotPaymentsResponse withGetPotPayments500ApplicationJsonAny(Object getPotPayments500ApplicationJSONAny) {
        this.getPotPayments500ApplicationJSONAny = getPotPayments500ApplicationJSONAny;
        return this;
    }
}