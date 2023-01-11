package openapisdk.models.operations;



public class GetJobStatusAndResponseResponse {
    public String contentType;
    public GetJobStatusAndResponseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetJobStatusAndResponse200ApplicationJson getJobStatusAndResponse200ApplicationJSONObject;
    public GetJobStatusAndResponseResponse withGetJobStatusAndResponse200ApplicationJsonObject(GetJobStatusAndResponse200ApplicationJson getJobStatusAndResponse200ApplicationJSONObject) {
        this.getJobStatusAndResponse200ApplicationJSONObject = getJobStatusAndResponse200ApplicationJSONObject;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetJobStatusAndResponseResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetJobStatusAndResponseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}