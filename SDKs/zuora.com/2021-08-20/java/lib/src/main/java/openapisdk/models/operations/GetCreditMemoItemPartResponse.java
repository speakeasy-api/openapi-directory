package openapisdk.models.operations;



public class GetCreditMemoItemPartResponse {
    public String contentType;
    public GetCreditMemoItemPartResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCreditMemoItemPartType getCreditMemoItemPartType;
    public GetCreditMemoItemPartResponse withGetCreditMemoItemPartType(openapisdk.models.shared.GetCreditMemoItemPartType getCreditMemoItemPartType) {
        this.getCreditMemoItemPartType = getCreditMemoItemPartType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCreditMemoItemPartResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCreditMemoItemPartResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}