package openapisdk.models.operations;



public class GetCreditMemosResponse {
    public String contentType;
    public GetCreditMemosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCreditMemoCollectionType getCreditMemoCollectionType;
    public GetCreditMemosResponse withGetCreditMemoCollectionType(openapisdk.models.shared.GetCreditMemoCollectionType getCreditMemoCollectionType) {
        this.getCreditMemoCollectionType = getCreditMemoCollectionType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCreditMemosResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCreditMemosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}