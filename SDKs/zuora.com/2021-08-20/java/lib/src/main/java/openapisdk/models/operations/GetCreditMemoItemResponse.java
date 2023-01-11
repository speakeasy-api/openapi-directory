package openapisdk.models.operations;



public class GetCreditMemoItemResponse {
    public String contentType;
    public GetCreditMemoItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> getCreditMemoItemType;
    public GetCreditMemoItemResponse withGetCreditMemoItemType(java.util.Map<String, Object> getCreditMemoItemType) {
        this.getCreditMemoItemType = getCreditMemoItemType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCreditMemoItemResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCreditMemoItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}