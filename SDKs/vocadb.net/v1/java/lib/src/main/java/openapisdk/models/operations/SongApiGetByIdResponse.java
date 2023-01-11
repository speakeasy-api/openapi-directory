package openapisdk.models.operations;



public class SongApiGetByIdResponse {
    public byte[] body;
    public SongApiGetByIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SongApiGetByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SongForApiContract songForApiContract;
    public SongApiGetByIdResponse withSongForApiContract(openapisdk.models.shared.SongForApiContract songForApiContract) {
        this.songForApiContract = songForApiContract;
        return this;
    }
    public Long statusCode;
    public SongApiGetByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}