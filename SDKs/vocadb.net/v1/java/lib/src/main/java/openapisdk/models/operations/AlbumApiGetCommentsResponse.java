package openapisdk.models.operations;



public class AlbumApiGetCommentsResponse {
    public byte[] body;
    public AlbumApiGetCommentsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public openapisdk.models.shared.CommentForApiContract[] commentForApiContracts;
    public AlbumApiGetCommentsResponse withCommentForApiContracts(openapisdk.models.shared.CommentForApiContract[] commentForApiContracts) {
        this.commentForApiContracts = commentForApiContracts;
        return this;
    }
    public String contentType;
    public AlbumApiGetCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AlbumApiGetCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}