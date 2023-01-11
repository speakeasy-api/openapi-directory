package openapisdk.models.operations;



public class ArtistApiGetCommentsResponse {
    public byte[] body;
    public ArtistApiGetCommentsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public openapisdk.models.shared.CommentForApiContract[] commentForApiContracts;
    public ArtistApiGetCommentsResponse withCommentForApiContracts(openapisdk.models.shared.CommentForApiContract[] commentForApiContracts) {
        this.commentForApiContracts = commentForApiContracts;
        return this;
    }
    public String contentType;
    public ArtistApiGetCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ArtistApiGetCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}