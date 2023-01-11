package openapisdk.models.operations;



public class GetTierResponse {
    public String contentType;
    public GetTierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetTierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Tier tier;
    public GetTierResponse withTier(openapisdk.models.shared.Tier tier) {
        this.tier = tier;
        return this;
    }
}