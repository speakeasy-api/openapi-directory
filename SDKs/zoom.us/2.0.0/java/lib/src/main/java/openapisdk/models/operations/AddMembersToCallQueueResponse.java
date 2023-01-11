package openapisdk.models.operations;



public class AddMembersToCallQueueResponse {
    public byte[] body;
    public AddMembersToCallQueueResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AddMembersToCallQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddMembersToCallQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> addMembersToCallQueue201ApplicationJSONObject;
    public AddMembersToCallQueueResponse withAddMembersToCallQueue201ApplicationJsonObject(java.util.Map<String, Object> addMembersToCallQueue201ApplicationJSONObject) {
        this.addMembersToCallQueue201ApplicationJSONObject = addMembersToCallQueue201ApplicationJSONObject;
        return this;
    }
}