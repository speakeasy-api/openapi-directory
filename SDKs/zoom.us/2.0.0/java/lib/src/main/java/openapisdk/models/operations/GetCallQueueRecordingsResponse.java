package openapisdk.models.operations;



public class GetCallQueueRecordingsResponse {
    public byte[] body;
    public GetCallQueueRecordingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetCallQueueRecordingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCallQueueRecordingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetCallQueueRecordings200ApplicationJson getCallQueueRecordings200ApplicationJSONObject;
    public GetCallQueueRecordingsResponse withGetCallQueueRecordings200ApplicationJsonObject(GetCallQueueRecordings200ApplicationJson getCallQueueRecordings200ApplicationJSONObject) {
        this.getCallQueueRecordings200ApplicationJSONObject = getCallQueueRecordings200ApplicationJSONObject;
        return this;
    }
}