package openapisdk.models.operations;



public class VenueApiGetListResponse {
    public byte[] body;
    public VenueApiGetListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public VenueApiGetListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PartialFindResultVenueForApiContract partialFindResultVenueForApiContract;
    public VenueApiGetListResponse withPartialFindResultVenueForApiContract(openapisdk.models.shared.PartialFindResultVenueForApiContract partialFindResultVenueForApiContract) {
        this.partialFindResultVenueForApiContract = partialFindResultVenueForApiContract;
        return this;
    }
    public Long statusCode;
    public VenueApiGetListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}