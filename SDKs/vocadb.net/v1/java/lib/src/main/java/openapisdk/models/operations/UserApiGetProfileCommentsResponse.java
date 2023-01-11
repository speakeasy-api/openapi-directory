package openapisdk.models.operations;



public class UserApiGetProfileCommentsResponse {
    public byte[] body;
    public UserApiGetProfileCommentsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserApiGetProfileCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PartialFindResultCommentForApiContract partialFindResultCommentForApiContract;
    public UserApiGetProfileCommentsResponse withPartialFindResultCommentForApiContract(openapisdk.models.shared.PartialFindResultCommentForApiContract partialFindResultCommentForApiContract) {
        this.partialFindResultCommentForApiContract = partialFindResultCommentForApiContract;
        return this;
    }
    public Long statusCode;
    public UserApiGetProfileCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}