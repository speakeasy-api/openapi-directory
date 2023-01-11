package openapisdk.models.operations;



public class GetDebitMemoItemsResponse {
    public String contentType;
    public GetDebitMemoItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDebitMemoItemCollectionType getDebitMemoItemCollectionType;
    public GetDebitMemoItemsResponse withGetDebitMemoItemCollectionType(openapisdk.models.shared.GetDebitMemoItemCollectionType getDebitMemoItemCollectionType) {
        this.getDebitMemoItemCollectionType = getDebitMemoItemCollectionType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDebitMemoItemsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDebitMemoItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}