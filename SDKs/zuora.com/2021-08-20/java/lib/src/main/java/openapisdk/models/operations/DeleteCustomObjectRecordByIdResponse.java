package openapisdk.models.operations;



public class DeleteCustomObjectRecordByIdResponse {
    public String contentType;
    public DeleteCustomObjectRecordByIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String deleteCustomObjectRecordByID200ApplicationJSONUriString;
    public DeleteCustomObjectRecordByIdResponse withDeleteCustomObjectRecordById200ApplicationJsonUriString(String deleteCustomObjectRecordByID200ApplicationJSONUriString) {
        this.deleteCustomObjectRecordByID200ApplicationJSONUriString = deleteCustomObjectRecordByID200ApplicationJSONUriString;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteCustomObjectRecordByIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteCustomObjectRecordByIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}