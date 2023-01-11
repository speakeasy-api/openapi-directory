package openapisdk.models.operations;



public class GetTaxationItemsOfDebitMemoItemResponse {
    public String contentType;
    public GetTaxationItemsOfDebitMemoItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public GetTaxationItemsOfDebitMemoItem200ApplicationJson getTaxationItemsOfDebitMemoItem200ApplicationJSONObject;
    public GetTaxationItemsOfDebitMemoItemResponse withGetTaxationItemsOfDebitMemoItem200ApplicationJsonObject(GetTaxationItemsOfDebitMemoItem200ApplicationJson getTaxationItemsOfDebitMemoItem200ApplicationJSONObject) {
        this.getTaxationItemsOfDebitMemoItem200ApplicationJSONObject = getTaxationItemsOfDebitMemoItem200ApplicationJSONObject;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTaxationItemsOfDebitMemoItemResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTaxationItemsOfDebitMemoItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}