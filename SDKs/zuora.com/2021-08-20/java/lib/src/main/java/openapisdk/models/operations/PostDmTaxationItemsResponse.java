package openapisdk.models.operations;



public class PostDmTaxationItemsResponse {
    public String contentType;
    public PostDmTaxationItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetTaxationItemListType getTaxationItemListType;
    public PostDmTaxationItemsResponse withGetTaxationItemListType(openapisdk.models.shared.GetTaxationItemListType getTaxationItemListType) {
        this.getTaxationItemListType = getTaxationItemListType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostDmTaxationItemsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostDmTaxationItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}