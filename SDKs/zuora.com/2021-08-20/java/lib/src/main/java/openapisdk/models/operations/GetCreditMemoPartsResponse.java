package openapisdk.models.operations;



public class GetCreditMemoPartsResponse {
    public String contentType;
    public GetCreditMemoPartsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCreditMemoPartsCollectionType getCreditMemoPartsCollectionType;
    public GetCreditMemoPartsResponse withGetCreditMemoPartsCollectionType(openapisdk.models.shared.GetCreditMemoPartsCollectionType getCreditMemoPartsCollectionType) {
        this.getCreditMemoPartsCollectionType = getCreditMemoPartsCollectionType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCreditMemoPartsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCreditMemoPartsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}