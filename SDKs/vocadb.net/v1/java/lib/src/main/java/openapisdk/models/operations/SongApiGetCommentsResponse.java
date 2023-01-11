package openapisdk.models.operations;



public class SongApiGetCommentsResponse {
    public byte[] body;
    public SongApiGetCommentsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public openapisdk.models.shared.CommentForApiContract[] commentForApiContracts;
    public SongApiGetCommentsResponse withCommentForApiContracts(openapisdk.models.shared.CommentForApiContract[] commentForApiContracts) {
        this.commentForApiContracts = commentForApiContracts;
        return this;
    }
    public String contentType;
    public SongApiGetCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SongApiGetCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}