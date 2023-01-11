package openapisdk.models.operations;



public class GetPsOperationLogsResponse {
    public byte[] body;
    public GetPsOperationLogsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetPsOperationLogsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetPsOperationLogsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetPsOperationLogs200ApplicationJson getPSOperationLogs200ApplicationJSONObject;
    public GetPsOperationLogsResponse withGetPsOperationLogs200ApplicationJsonObject(GetPsOperationLogs200ApplicationJson getPSOperationLogs200ApplicationJSONObject) {
        this.getPSOperationLogs200ApplicationJSONObject = getPSOperationLogs200ApplicationJSONObject;
        return this;
    }
}