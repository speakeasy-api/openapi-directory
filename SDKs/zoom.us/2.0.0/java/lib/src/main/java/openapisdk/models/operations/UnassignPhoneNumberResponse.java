package openapisdk.models.operations;



public class UnassignPhoneNumberResponse {
    public byte[] body;
    public UnassignPhoneNumberResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UnassignPhoneNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UnassignPhoneNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unassignPhoneNumber204ApplicationJSONAny;
    public UnassignPhoneNumberResponse withUnassignPhoneNumber204ApplicationJsonAny(Object unassignPhoneNumber204ApplicationJSONAny) {
        this.unassignPhoneNumber204ApplicationJSONAny = unassignPhoneNumber204ApplicationJSONAny;
        return this;
    }
}