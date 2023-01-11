package openapisdk.models.operations;



public class SongApiGetListResponse {
    public byte[] body;
    public SongApiGetListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SongApiGetListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PartialFindResultSongForApiContract partialFindResultSongForApiContract;
    public SongApiGetListResponse withPartialFindResultSongForApiContract(openapisdk.models.shared.PartialFindResultSongForApiContract partialFindResultSongForApiContract) {
        this.partialFindResultSongForApiContract = partialFindResultSongForApiContract;
        return this;
    }
    public Long statusCode;
    public SongApiGetListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}