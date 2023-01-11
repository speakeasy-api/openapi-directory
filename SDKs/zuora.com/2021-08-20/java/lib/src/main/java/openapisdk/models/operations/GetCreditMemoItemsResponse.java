package openapisdk.models.operations;



public class GetCreditMemoItemsResponse {
    public String contentType;
    public GetCreditMemoItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCreditMemoItemsListType getCreditMemoItemsListType;
    public GetCreditMemoItemsResponse withGetCreditMemoItemsListType(openapisdk.models.shared.GetCreditMemoItemsListType getCreditMemoItemsListType) {
        this.getCreditMemoItemsListType = getCreditMemoItemsListType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCreditMemoItemsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCreditMemoItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}