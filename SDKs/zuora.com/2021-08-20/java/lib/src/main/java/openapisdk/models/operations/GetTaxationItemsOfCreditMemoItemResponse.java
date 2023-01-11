package openapisdk.models.operations;



public class GetTaxationItemsOfCreditMemoItemResponse {
    public String contentType;
    public GetTaxationItemsOfCreditMemoItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetTaxationItemsOfCreditMemoItem200ApplicationJson getTaxationItemsOfCreditMemoItem200ApplicationJSONObject;
    public GetTaxationItemsOfCreditMemoItemResponse withGetTaxationItemsOfCreditMemoItem200ApplicationJsonObject(GetTaxationItemsOfCreditMemoItem200ApplicationJson getTaxationItemsOfCreditMemoItem200ApplicationJSONObject) {
        this.getTaxationItemsOfCreditMemoItem200ApplicationJSONObject = getTaxationItemsOfCreditMemoItem200ApplicationJSONObject;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTaxationItemsOfCreditMemoItemResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTaxationItemsOfCreditMemoItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}