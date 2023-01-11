package openapisdk.models.operations;



public class GetCreditMemoPartResponse {
    public String contentType;
    public GetCreditMemoPartResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCreditMemoPartType getCreditMemoPartType;
    public GetCreditMemoPartResponse withGetCreditMemoPartType(openapisdk.models.shared.GetCreditMemoPartType getCreditMemoPartType) {
        this.getCreditMemoPartType = getCreditMemoPartType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCreditMemoPartResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCreditMemoPartResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}