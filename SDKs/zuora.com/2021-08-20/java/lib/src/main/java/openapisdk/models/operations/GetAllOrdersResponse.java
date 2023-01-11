package openapisdk.models.operations;



public class GetAllOrdersResponse {
    public String contentType;
    public GetAllOrdersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAllOrdersResponseType getAllOrdersResponseType;
    public GetAllOrdersResponse withGetAllOrdersResponseType(openapisdk.models.shared.GetAllOrdersResponseType getAllOrdersResponseType) {
        this.getAllOrdersResponseType = getAllOrdersResponseType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetAllOrdersResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetAllOrdersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}