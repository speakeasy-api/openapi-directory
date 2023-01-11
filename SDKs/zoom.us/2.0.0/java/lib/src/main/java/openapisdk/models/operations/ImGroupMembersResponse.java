package openapisdk.models.operations;



public class ImGroupMembersResponse {
    public byte[] body;
    public ImGroupMembersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ImGroupMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ImGroupMembersGroupMemberList groupMemberList;
    public ImGroupMembersResponse withGroupMemberList(ImGroupMembersGroupMemberList groupMemberList) {
        this.groupMemberList = groupMemberList;
        return this;
    }
    public Long statusCode;
    public ImGroupMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}