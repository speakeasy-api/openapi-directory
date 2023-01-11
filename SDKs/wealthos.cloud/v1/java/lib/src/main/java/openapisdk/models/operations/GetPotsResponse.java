package openapisdk.models.operations;



public class GetPotsResponse {
    public String contentType;
    public GetPotsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPotsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetPots200ApplicationJson getPots200ApplicationJSONObject;
    public GetPotsResponse withGetPots200ApplicationJsonObject(GetPots200ApplicationJson getPots200ApplicationJSONObject) {
        this.getPots200ApplicationJSONObject = getPots200ApplicationJSONObject;
        return this;
    }
    public Object getPots400ApplicationJSONAny;
    public GetPotsResponse withGetPots400ApplicationJsonAny(Object getPots400ApplicationJSONAny) {
        this.getPots400ApplicationJSONAny = getPots400ApplicationJSONAny;
        return this;
    }
    public Object getPots401ApplicationJSONAny;
    public GetPotsResponse withGetPots401ApplicationJsonAny(Object getPots401ApplicationJSONAny) {
        this.getPots401ApplicationJSONAny = getPots401ApplicationJSONAny;
        return this;
    }
    public Object getPots403ApplicationJSONAny;
    public GetPotsResponse withGetPots403ApplicationJsonAny(Object getPots403ApplicationJSONAny) {
        this.getPots403ApplicationJSONAny = getPots403ApplicationJSONAny;
        return this;
    }
    public Object getPots404ApplicationJSONAny;
    public GetPotsResponse withGetPots404ApplicationJsonAny(Object getPots404ApplicationJSONAny) {
        this.getPots404ApplicationJSONAny = getPots404ApplicationJSONAny;
        return this;
    }
    public Object getPots429ApplicationJSONAny;
    public GetPotsResponse withGetPots429ApplicationJsonAny(Object getPots429ApplicationJSONAny) {
        this.getPots429ApplicationJSONAny = getPots429ApplicationJSONAny;
        return this;
    }
    public Object getPots500ApplicationJSONAny;
    public GetPotsResponse withGetPots500ApplicationJsonAny(Object getPots500ApplicationJSONAny) {
        this.getPots500ApplicationJSONAny = getPots500ApplicationJSONAny;
        return this;
    }
}