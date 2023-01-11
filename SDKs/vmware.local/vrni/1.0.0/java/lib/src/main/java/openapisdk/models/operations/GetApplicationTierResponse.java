package openapisdk.models.operations;



public class GetApplicationTierResponse {
    public String contentType;
    public GetApplicationTierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetApplicationTierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Tier tier;
    public GetApplicationTierResponse withTier(openapisdk.models.shared.Tier tier) {
        this.tier = tier;
        return this;
    }
}