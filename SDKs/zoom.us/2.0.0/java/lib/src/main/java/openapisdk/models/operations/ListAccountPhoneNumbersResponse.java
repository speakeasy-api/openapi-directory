package openapisdk.models.operations;



public class ListAccountPhoneNumbersResponse {
    public byte[] body;
    public ListAccountPhoneNumbersResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListAccountPhoneNumbersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListAccountPhoneNumbersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListAccountPhoneNumbers200ApplicationJson listAccountPhoneNumbers200ApplicationJSONObject;
    public ListAccountPhoneNumbersResponse withListAccountPhoneNumbers200ApplicationJsonObject(ListAccountPhoneNumbers200ApplicationJson listAccountPhoneNumbers200ApplicationJSONObject) {
        this.listAccountPhoneNumbers200ApplicationJSONObject = listAccountPhoneNumbers200ApplicationJSONObject;
        return this;
    }
}