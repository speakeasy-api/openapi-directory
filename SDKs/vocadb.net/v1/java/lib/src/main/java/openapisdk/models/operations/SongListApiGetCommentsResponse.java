package openapisdk.models.operations;



public class SongListApiGetCommentsResponse {
    public byte[] body;
    public SongListApiGetCommentsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SongListApiGetCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PartialFindResultCommentForApiContract partialFindResultCommentForApiContract;
    public SongListApiGetCommentsResponse withPartialFindResultCommentForApiContract(openapisdk.models.shared.PartialFindResultCommentForApiContract partialFindResultCommentForApiContract) {
        this.partialFindResultCommentForApiContract = partialFindResultCommentForApiContract;
        return this;
    }
    public Long statusCode;
    public SongListApiGetCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}