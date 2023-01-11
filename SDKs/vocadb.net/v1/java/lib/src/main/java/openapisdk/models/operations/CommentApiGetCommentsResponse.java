package openapisdk.models.operations;



public class CommentApiGetCommentsResponse {
    public byte[] body;
    public CommentApiGetCommentsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CommentApiGetCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PartialFindResultCommentForApiContract partialFindResultCommentForApiContract;
    public CommentApiGetCommentsResponse withPartialFindResultCommentForApiContract(openapisdk.models.shared.PartialFindResultCommentForApiContract partialFindResultCommentForApiContract) {
        this.partialFindResultCommentForApiContract = partialFindResultCommentForApiContract;
        return this;
    }
    public Long statusCode;
    public CommentApiGetCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}