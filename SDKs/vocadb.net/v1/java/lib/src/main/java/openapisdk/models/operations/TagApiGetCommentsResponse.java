package openapisdk.models.operations;



public class TagApiGetCommentsResponse {
    public byte[] body;
    public TagApiGetCommentsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public TagApiGetCommentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PartialFindResultCommentForApiContract partialFindResultCommentForApiContract;
    public TagApiGetCommentsResponse withPartialFindResultCommentForApiContract(openapisdk.models.shared.PartialFindResultCommentForApiContract partialFindResultCommentForApiContract) {
        this.partialFindResultCommentForApiContract = partialFindResultCommentForApiContract;
        return this;
    }
    public Long statusCode;
    public TagApiGetCommentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}