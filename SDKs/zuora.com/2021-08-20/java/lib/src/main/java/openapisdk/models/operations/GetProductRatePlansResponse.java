package openapisdk.models.operations;



public class GetProductRatePlansResponse {
    public String contentType;
    public GetProductRatePlansResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetProductRatePlansResponse getProductRatePlansResponse;
    public GetProductRatePlansResponse withGetProductRatePlansResponse(openapisdk.models.shared.GetProductRatePlansResponse getProductRatePlansResponse) {
        this.getProductRatePlansResponse = getProductRatePlansResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetProductRatePlansResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetProductRatePlansResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}