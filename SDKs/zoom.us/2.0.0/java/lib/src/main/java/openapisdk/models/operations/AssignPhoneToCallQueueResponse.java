package openapisdk.models.operations;



public class AssignPhoneToCallQueueResponse {
    public byte[] body;
    public AssignPhoneToCallQueueResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AssignPhoneToCallQueueResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AssignPhoneToCallQueueResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> assignPhoneToCallQueue204ApplicationJSONObject;
    public AssignPhoneToCallQueueResponse withAssignPhoneToCallQueue204ApplicationJsonObject(java.util.Map<String, Object> assignPhoneToCallQueue204ApplicationJSONObject) {
        this.assignPhoneToCallQueue204ApplicationJSONObject = assignPhoneToCallQueue204ApplicationJSONObject;
        return this;
    }
}