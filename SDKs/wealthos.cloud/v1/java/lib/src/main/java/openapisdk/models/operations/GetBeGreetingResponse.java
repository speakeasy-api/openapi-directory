package openapisdk.models.operations;



public class GetBeGreetingResponse {
    public String contentType;
    public GetBeGreetingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetBeGreetingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getBEGreeting200ApplicationJSONAny;
    public GetBeGreetingResponse withGetBeGreeting200ApplicationJsonAny(Object getBEGreeting200ApplicationJSONAny) {
        this.getBEGreeting200ApplicationJSONAny = getBEGreeting200ApplicationJSONAny;
        return this;
    }
    public Object getBEGreeting403ApplicationJSONAny;
    public GetBeGreetingResponse withGetBeGreeting403ApplicationJsonAny(Object getBEGreeting403ApplicationJSONAny) {
        this.getBEGreeting403ApplicationJSONAny = getBEGreeting403ApplicationJSONAny;
        return this;
    }
    public Object getBEGreeting429ApplicationJSONAny;
    public GetBeGreetingResponse withGetBeGreeting429ApplicationJsonAny(Object getBEGreeting429ApplicationJSONAny) {
        this.getBEGreeting429ApplicationJSONAny = getBEGreeting429ApplicationJSONAny;
        return this;
    }
    public Object getBEGreeting500ApplicationJSONAny;
    public GetBeGreetingResponse withGetBeGreeting500ApplicationJsonAny(Object getBEGreeting500ApplicationJSONAny) {
        this.getBEGreeting500ApplicationJSONAny = getBEGreeting500ApplicationJSONAny;
        return this;
    }
}