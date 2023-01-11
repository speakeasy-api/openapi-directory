package openapisdk.models.operations;



public class GetAllInvestorsResponse {
    public String contentType;
    public GetAllInvestorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAllInvestorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAllInvestors200ApplicationJson getAllInvestors200ApplicationJSONObject;
    public GetAllInvestorsResponse withGetAllInvestors200ApplicationJsonObject(GetAllInvestors200ApplicationJson getAllInvestors200ApplicationJSONObject) {
        this.getAllInvestors200ApplicationJSONObject = getAllInvestors200ApplicationJSONObject;
        return this;
    }
    public Object getAllInvestors400ApplicationJSONAny;
    public GetAllInvestorsResponse withGetAllInvestors400ApplicationJsonAny(Object getAllInvestors400ApplicationJSONAny) {
        this.getAllInvestors400ApplicationJSONAny = getAllInvestors400ApplicationJSONAny;
        return this;
    }
    public Object getAllInvestors401ApplicationJSONAny;
    public GetAllInvestorsResponse withGetAllInvestors401ApplicationJsonAny(Object getAllInvestors401ApplicationJSONAny) {
        this.getAllInvestors401ApplicationJSONAny = getAllInvestors401ApplicationJSONAny;
        return this;
    }
    public Object getAllInvestors403ApplicationJSONAny;
    public GetAllInvestorsResponse withGetAllInvestors403ApplicationJsonAny(Object getAllInvestors403ApplicationJSONAny) {
        this.getAllInvestors403ApplicationJSONAny = getAllInvestors403ApplicationJSONAny;
        return this;
    }
    public Object getAllInvestors429ApplicationJSONAny;
    public GetAllInvestorsResponse withGetAllInvestors429ApplicationJsonAny(Object getAllInvestors429ApplicationJSONAny) {
        this.getAllInvestors429ApplicationJSONAny = getAllInvestors429ApplicationJSONAny;
        return this;
    }
    public Object getAllInvestors500ApplicationJSONAny;
    public GetAllInvestorsResponse withGetAllInvestors500ApplicationJsonAny(Object getAllInvestors500ApplicationJSONAny) {
        this.getAllInvestors500ApplicationJSONAny = getAllInvestors500ApplicationJSONAny;
        return this;
    }
}