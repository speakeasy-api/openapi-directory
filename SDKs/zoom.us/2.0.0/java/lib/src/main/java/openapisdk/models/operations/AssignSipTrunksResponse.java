package openapisdk.models.operations;



public class AssignSipTrunksResponse {
    public byte[] body;
    public AssignSipTrunksResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AssignSipTrunksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AssignSipTrunksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AssignSipTrunks201ApplicationJson assignSIPTrunks201ApplicationJSONObject;
    public AssignSipTrunksResponse withAssignSipTrunks201ApplicationJsonObject(AssignSipTrunks201ApplicationJson assignSIPTrunks201ApplicationJSONObject) {
        this.assignSIPTrunks201ApplicationJSONObject = assignSIPTrunks201ApplicationJSONObject;
        return this;
    }
}