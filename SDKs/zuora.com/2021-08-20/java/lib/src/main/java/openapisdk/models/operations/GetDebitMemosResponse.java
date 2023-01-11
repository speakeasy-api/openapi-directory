package openapisdk.models.operations;



public class GetDebitMemosResponse {
    public String contentType;
    public GetDebitMemosResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDebitMemoCollectionType getDebitMemoCollectionType;
    public GetDebitMemosResponse withGetDebitMemoCollectionType(openapisdk.models.shared.GetDebitMemoCollectionType getDebitMemoCollectionType) {
        this.getDebitMemoCollectionType = getDebitMemoCollectionType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDebitMemosResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDebitMemosResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}