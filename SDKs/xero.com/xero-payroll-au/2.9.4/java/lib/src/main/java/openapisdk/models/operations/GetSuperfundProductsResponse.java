package openapisdk.models.operations;



public class GetSuperfundProductsResponse {
    public openapisdk.models.shared.ApiException apiException;
    public GetSuperfundProductsResponse withApiException(openapisdk.models.shared.ApiException apiException) {
        this.apiException = apiException;
        return this;
    }
    public String contentType;
    public GetSuperfundProductsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSuperfundProductsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SuperFundProducts superFundProducts;
    public GetSuperfundProductsResponse withSuperFundProducts(openapisdk.models.shared.SuperFundProducts superFundProducts) {
        this.superFundProducts = superFundProducts;
        return this;
    }
}