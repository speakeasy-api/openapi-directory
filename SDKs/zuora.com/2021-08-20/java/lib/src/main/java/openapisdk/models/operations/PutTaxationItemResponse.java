package openapisdk.models.operations;



public class PutTaxationItemResponse {
    public String contentType;
    public PutTaxationItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getTaxationItemType;
    public PutTaxationItemResponse withGetTaxationItemType(java.util.Map<String, Object> getTaxationItemType) {
        this.getTaxationItemType = getTaxationItemType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutTaxationItemResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutTaxationItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}