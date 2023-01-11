package openapisdk.models.operations;



public class AlbumApiGetReviewsResponse {
    public openapisdk.models.shared.AlbumReviewContract[] albumReviewContracts;
    public AlbumApiGetReviewsResponse withAlbumReviewContracts(openapisdk.models.shared.AlbumReviewContract[] albumReviewContracts) {
        this.albumReviewContracts = albumReviewContracts;
        return this;
    }
    public byte[] body;
    public AlbumApiGetReviewsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AlbumApiGetReviewsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AlbumApiGetReviewsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}