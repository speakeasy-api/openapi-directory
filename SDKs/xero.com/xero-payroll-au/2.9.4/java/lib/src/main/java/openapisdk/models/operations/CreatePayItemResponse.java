package openapisdk.models.operations;



public class CreatePayItemResponse {
    public String contentType;
    public CreatePayItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PayItems payItems;
    public CreatePayItemResponse withPayItems(openapisdk.models.shared.PayItems payItems) {
        this.payItems = payItems;
        return this;
    }
    public Long statusCode;
    public CreatePayItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}