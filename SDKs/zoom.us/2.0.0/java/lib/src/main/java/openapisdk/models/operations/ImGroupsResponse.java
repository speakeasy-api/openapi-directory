package openapisdk.models.operations;



public class ImGroupsResponse {
    public byte[] body;
    public ImGroupsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ImGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public ImGroupsImGroupList imGroupList;
    public ImGroupsResponse withImGroupList(ImGroupsImGroupList imGroupList) {
        this.imGroupList = imGroupList;
        return this;
    }
    public Long statusCode;
    public ImGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}