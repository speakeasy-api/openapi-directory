package openapisdk.models.operations;



public class ArtistApiGetOneResponse {
    public openapisdk.models.shared.ArtistForApiContract artistForApiContract;
    public ArtistApiGetOneResponse withArtistForApiContract(openapisdk.models.shared.ArtistForApiContract artistForApiContract) {
        this.artistForApiContract = artistForApiContract;
        return this;
    }
    public byte[] body;
    public ArtistApiGetOneResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ArtistApiGetOneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ArtistApiGetOneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}