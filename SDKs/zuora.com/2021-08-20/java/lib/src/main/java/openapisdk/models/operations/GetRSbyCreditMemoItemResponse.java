package openapisdk.models.operations;



public class GetRSbyCreditMemoItemResponse {
    public String contentType;
    public GetRSbyCreditMemoItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getrsDetailType;
    public GetRSbyCreditMemoItemResponse withGetrsDetailType(java.util.Map<String, Object> getrsDetailType) {
        this.getrsDetailType = getrsDetailType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRSbyCreditMemoItemResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRSbyCreditMemoItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}