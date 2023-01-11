package openapisdk.models.operations;



public class GetDebitMemoApplicationPartsResponse {
    public String contentType;
    public GetDebitMemoApplicationPartsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDebitMemoApplicationPartCollectionType getDebitMemoApplicationPartCollectionType;
    public GetDebitMemoApplicationPartsResponse withGetDebitMemoApplicationPartCollectionType(openapisdk.models.shared.GetDebitMemoApplicationPartCollectionType getDebitMemoApplicationPartCollectionType) {
        this.getDebitMemoApplicationPartCollectionType = getDebitMemoApplicationPartCollectionType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDebitMemoApplicationPartsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDebitMemoApplicationPartsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}