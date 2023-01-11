package openapisdk.models.operations;



public class GetCallLogMetricsDetailsResponse {
    public byte[] body;
    public GetCallLogMetricsDetailsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCallLogMetricsDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCallLogMetricsDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetCallLogMetricsDetails200ApplicationJson getCallLogMetricsDetails200ApplicationJSONObject;
    public GetCallLogMetricsDetailsResponse withGetCallLogMetricsDetails200ApplicationJsonObject(GetCallLogMetricsDetails200ApplicationJson getCallLogMetricsDetails200ApplicationJSONObject) {
        this.getCallLogMetricsDetails200ApplicationJSONObject = getCallLogMetricsDetails200ApplicationJSONObject;
        return this;
    }
}