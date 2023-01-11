package openapisdk.models.operations;



public class ListApplicationTiersResponse {
    public String contentType;
    public ListApplicationTiersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListApplicationTiersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TierListResponse tierListResponse;
    public ListApplicationTiersResponse withTierListResponse(openapisdk.models.shared.TierListResponse tierListResponse) {
        this.tierListResponse = tierListResponse;
        return this;
    }
}