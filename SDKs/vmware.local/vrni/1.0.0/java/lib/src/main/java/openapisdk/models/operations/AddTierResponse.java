package openapisdk.models.operations;



public class AddTierResponse {
    public openapisdk.models.shared.ApiError apiError;
    public AddTierResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public AddTierResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddTierResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Tier tier;
    public AddTierResponse withTier(openapisdk.models.shared.Tier tier) {
        this.tier = tier;
        return this;
    }
}