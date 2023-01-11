package openapisdk.models.operations;



public class GetPayItemsResponse {
    public openapisdk.models.shared.ApiException apiException;
    public GetPayItemsResponse withApiException(openapisdk.models.shared.ApiException apiException) {
        this.apiException = apiException;
        return this;
    }
    public String contentType;
    public GetPayItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PayItems payItems;
    public GetPayItemsResponse withPayItems(openapisdk.models.shared.PayItems payItems) {
        this.payItems = payItems;
        return this;
    }
    public Long statusCode;
    public GetPayItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}