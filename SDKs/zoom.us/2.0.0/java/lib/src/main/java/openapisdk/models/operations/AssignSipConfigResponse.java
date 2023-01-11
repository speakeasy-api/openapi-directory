package openapisdk.models.operations;



public class AssignSipConfigResponse {
    public byte[] body;
    public AssignSipConfigResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AssignSipConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AssignSipConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object assignSIPConfig204ApplicationJSONAny;
    public AssignSipConfigResponse withAssignSipConfig204ApplicationJsonAny(Object assignSIPConfig204ApplicationJSONAny) {
        this.assignSIPConfig204ApplicationJSONAny = assignSIPConfig204ApplicationJSONAny;
        return this;
    }
}