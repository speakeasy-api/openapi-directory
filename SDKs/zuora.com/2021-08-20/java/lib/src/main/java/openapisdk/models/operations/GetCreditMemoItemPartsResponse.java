package openapisdk.models.operations;



public class GetCreditMemoItemPartsResponse {
    public String contentType;
    public GetCreditMemoItemPartsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCreditMemoItemPartsCollectionType getCreditMemoItemPartsCollectionType;
    public GetCreditMemoItemPartsResponse withGetCreditMemoItemPartsCollectionType(openapisdk.models.shared.GetCreditMemoItemPartsCollectionType getCreditMemoItemPartsCollectionType) {
        this.getCreditMemoItemPartsCollectionType = getCreditMemoItemPartsCollectionType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCreditMemoItemPartsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCreditMemoItemPartsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}