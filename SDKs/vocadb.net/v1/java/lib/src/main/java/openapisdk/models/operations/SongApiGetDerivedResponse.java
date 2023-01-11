package openapisdk.models.operations;



public class SongApiGetDerivedResponse {
    public byte[] body;
    public SongApiGetDerivedResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SongApiGetDerivedResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SongForApiContract[] songForApiContracts;
    public SongApiGetDerivedResponse withSongForApiContracts(openapisdk.models.shared.SongForApiContract[] songForApiContracts) {
        this.songForApiContracts = songForApiContracts;
        return this;
    }
    public Long statusCode;
    public SongApiGetDerivedResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}