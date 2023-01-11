package openapisdk.models.operations;



public class PutOrderLineItemResponse {
    public String contentType;
    public PutOrderLineItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutOrderLineItemResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PutOrderLineItemResponseType putOrderLineItemResponseType;
    public PutOrderLineItemResponse withPutOrderLineItemResponseType(openapisdk.models.shared.PutOrderLineItemResponseType putOrderLineItemResponseType) {
        this.putOrderLineItemResponseType = putOrderLineItemResponseType;
        return this;
    }
    public Long statusCode;
    public PutOrderLineItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}