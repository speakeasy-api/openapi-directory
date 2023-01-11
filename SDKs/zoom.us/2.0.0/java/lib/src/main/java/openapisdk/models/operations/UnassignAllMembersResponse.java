package openapisdk.models.operations;



public class UnassignAllMembersResponse {
    public byte[] body;
    public UnassignAllMembersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UnassignAllMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UnassignAllMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unassignAllMembers204ApplicationJSONAny;
    public UnassignAllMembersResponse withUnassignAllMembers204ApplicationJsonAny(Object unassignAllMembers204ApplicationJSONAny) {
        this.unassignAllMembers204ApplicationJSONAny = unassignAllMembers204ApplicationJSONAny;
        return this;
    }
}