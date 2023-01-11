package openapisdk.models.operations;



public class PostCmTaxationItemsResponse {
    public String contentType;
    public PostCmTaxationItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetTaxationItemListType getTaxationItemListType;
    public PostCmTaxationItemsResponse withGetTaxationItemListType(openapisdk.models.shared.GetTaxationItemListType getTaxationItemListType) {
        this.getTaxationItemListType = getTaxationItemListType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostCmTaxationItemsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostCmTaxationItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}