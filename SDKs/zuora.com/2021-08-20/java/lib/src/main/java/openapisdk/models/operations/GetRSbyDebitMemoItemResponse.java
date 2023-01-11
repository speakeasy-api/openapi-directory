package openapisdk.models.operations;



public class GetRSbyDebitMemoItemResponse {
    public String contentType;
    public GetRSbyDebitMemoItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getrsDetailType;
    public GetRSbyDebitMemoItemResponse withGetrsDetailType(java.util.Map<String, Object> getrsDetailType) {
        this.getrsDetailType = getrsDetailType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRSbyDebitMemoItemResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRSbyDebitMemoItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}