package openapisdk.models.operations;



public class SongApiGetByPvResponse {
    public byte[] body;
    public SongApiGetByPvResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SongApiGetByPvResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SongForApiContract songForApiContract;
    public SongApiGetByPvResponse withSongForApiContract(openapisdk.models.shared.SongForApiContract songForApiContract) {
        this.songForApiContract = songForApiContract;
        return this;
    }
    public Long statusCode;
    public SongApiGetByPvResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}