package openapisdk.models.operations;



public class GetDebitMemoItemResponse {
    public String contentType;
    public GetDebitMemoItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getDebitMemoItemType;
    public GetDebitMemoItemResponse withGetDebitMemoItemType(java.util.Map<String, Object> getDebitMemoItemType) {
        this.getDebitMemoItemType = getDebitMemoItemType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDebitMemoItemResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDebitMemoItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}