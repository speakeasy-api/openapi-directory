package openapisdk.models.operations;



public class SongApiGetRelatedResponse {
    public byte[] body;
    public SongApiGetRelatedResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SongApiGetRelatedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RelatedSongsContract relatedSongsContract;
    public SongApiGetRelatedResponse withRelatedSongsContract(openapisdk.models.shared.RelatedSongsContract relatedSongsContract) {
        this.relatedSongsContract = relatedSongsContract;
        return this;
    }
    public Long statusCode;
    public SongApiGetRelatedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}