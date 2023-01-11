package openapisdk.models.operations;



public class ArtistApiGetListResponse {
    public byte[] body;
    public ArtistApiGetListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ArtistApiGetListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PartialFindResultArtistForApiContract partialFindResultArtistForApiContract;
    public ArtistApiGetListResponse withPartialFindResultArtistForApiContract(openapisdk.models.shared.PartialFindResultArtistForApiContract partialFindResultArtistForApiContract) {
        this.partialFindResultArtistForApiContract = partialFindResultArtistForApiContract;
        return this;
    }
    public Long statusCode;
    public ArtistApiGetListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}