package openapisdk.models.operations;



public class GetTaxationItemResponse {
    public String contentType;
    public GetTaxationItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getTaxationItemType;
    public GetTaxationItemResponse withGetTaxationItemType(java.util.Map<String, Object> getTaxationItemType) {
        this.getTaxationItemType = getTaxationItemType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTaxationItemResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTaxationItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}