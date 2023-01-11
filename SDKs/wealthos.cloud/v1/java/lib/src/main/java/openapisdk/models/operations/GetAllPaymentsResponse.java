package openapisdk.models.operations;



public class GetAllPaymentsResponse {
    public String contentType;
    public GetAllPaymentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAllPaymentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAllPayments200ApplicationJson getAllPayments200ApplicationJSONObject;
    public GetAllPaymentsResponse withGetAllPayments200ApplicationJsonObject(GetAllPayments200ApplicationJson getAllPayments200ApplicationJSONObject) {
        this.getAllPayments200ApplicationJSONObject = getAllPayments200ApplicationJSONObject;
        return this;
    }
    public Object getAllPayments400ApplicationJSONAny;
    public GetAllPaymentsResponse withGetAllPayments400ApplicationJsonAny(Object getAllPayments400ApplicationJSONAny) {
        this.getAllPayments400ApplicationJSONAny = getAllPayments400ApplicationJSONAny;
        return this;
    }
    public Object getAllPayments401ApplicationJSONAny;
    public GetAllPaymentsResponse withGetAllPayments401ApplicationJsonAny(Object getAllPayments401ApplicationJSONAny) {
        this.getAllPayments401ApplicationJSONAny = getAllPayments401ApplicationJSONAny;
        return this;
    }
    public Object getAllPayments403ApplicationJSONAny;
    public GetAllPaymentsResponse withGetAllPayments403ApplicationJsonAny(Object getAllPayments403ApplicationJSONAny) {
        this.getAllPayments403ApplicationJSONAny = getAllPayments403ApplicationJSONAny;
        return this;
    }
    public Object getAllPayments404ApplicationJSONAny;
    public GetAllPaymentsResponse withGetAllPayments404ApplicationJsonAny(Object getAllPayments404ApplicationJSONAny) {
        this.getAllPayments404ApplicationJSONAny = getAllPayments404ApplicationJSONAny;
        return this;
    }
    public Object getAllPayments429ApplicationJSONAny;
    public GetAllPaymentsResponse withGetAllPayments429ApplicationJsonAny(Object getAllPayments429ApplicationJSONAny) {
        this.getAllPayments429ApplicationJSONAny = getAllPayments429ApplicationJSONAny;
        return this;
    }
    public Object getAllPayments500ApplicationJSONAny;
    public GetAllPaymentsResponse withGetAllPayments500ApplicationJsonAny(Object getAllPayments500ApplicationJSONAny) {
        this.getAllPayments500ApplicationJSONAny = getAllPayments500ApplicationJSONAny;
        return this;
    }
}