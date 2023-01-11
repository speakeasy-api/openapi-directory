package openapisdk.models.operations;



public class AssignPhoneNumberResponse {
    public byte[] body;
    public AssignPhoneNumberResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AssignPhoneNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AssignPhoneNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AssignPhoneNumber200ApplicationJson assignPhoneNumber200ApplicationJSONObject;
    public AssignPhoneNumberResponse withAssignPhoneNumber200ApplicationJsonObject(AssignPhoneNumber200ApplicationJson assignPhoneNumber200ApplicationJSONObject) {
        this.assignPhoneNumber200ApplicationJSONObject = assignPhoneNumber200ApplicationJSONObject;
        return this;
    }
}