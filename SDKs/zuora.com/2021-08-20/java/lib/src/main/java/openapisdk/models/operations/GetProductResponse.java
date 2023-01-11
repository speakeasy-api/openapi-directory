package openapisdk.models.operations;



public class GetProductResponse {
    public String contentType;
    public GetProductResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getProductType;
    public GetProductResponse withGetProductType(java.util.Map<String, Object> getProductType) {
        this.getProductType = getProductType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetProductResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetProductResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}