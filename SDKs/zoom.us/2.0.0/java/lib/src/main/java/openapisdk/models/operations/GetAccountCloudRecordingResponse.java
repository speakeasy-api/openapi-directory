package openapisdk.models.operations;



public class GetAccountCloudRecordingResponse {
    public byte[] body;
    public GetAccountCloudRecordingResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetAccountCloudRecordingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAccountCloudRecordingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAccountCloudRecording200ApplicationJson getAccountCloudRecording200ApplicationJSONObject;
    public GetAccountCloudRecordingResponse withGetAccountCloudRecording200ApplicationJsonObject(GetAccountCloudRecording200ApplicationJson getAccountCloudRecording200ApplicationJSONObject) {
        this.getAccountCloudRecording200ApplicationJSONObject = getAccountCloudRecording200ApplicationJSONObject;
        return this;
    }
}