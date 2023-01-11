package openapisdk.models.operations;



public class GetPaymentPartsResponse {
    public String contentType;
    public GetPaymentPartsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPaymentPartsCollectionType getPaymentPartsCollectionType;
    public GetPaymentPartsResponse withGetPaymentPartsCollectionType(openapisdk.models.shared.GetPaymentPartsCollectionType getPaymentPartsCollectionType) {
        this.getPaymentPartsCollectionType = getPaymentPartsCollectionType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetPaymentPartsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetPaymentPartsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}