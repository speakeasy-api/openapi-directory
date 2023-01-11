package openapisdk.models.operations;



public class TspResponse {
    public byte[] body;
    public TspResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public TspResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TspResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Tsp200ApplicationJson tsp200ApplicationJSONObject;
    public TspResponse withTsp200ApplicationJsonObject(Tsp200ApplicationJson tsp200ApplicationJSONObject) {
        this.tsp200ApplicationJSONObject = tsp200ApplicationJSONObject;
        return this;
    }
}