package openapisdk.models.operations;



public class ImGroupMembersCreateResponse {
    public byte[] body;
    public ImGroupMembersCreateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ImGroupMembersCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ImGroupMembersCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object imGroupMembersCreate201ApplicationJSONAny;
    public ImGroupMembersCreateResponse withImGroupMembersCreate201ApplicationJsonAny(Object imGroupMembersCreate201ApplicationJSONAny) {
        this.imGroupMembersCreate201ApplicationJSONAny = imGroupMembersCreate201ApplicationJSONAny;
        return this;
    }
}