package openapisdk.models.operations;



public class ListCallingPlansResponse {
    public byte[] body;
    public ListCallingPlansResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListCallingPlansResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListCallingPlansResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListCallingPlans200ApplicationJson listCallingPlans200ApplicationJSONObject;
    public ListCallingPlansResponse withListCallingPlans200ApplicationJsonObject(ListCallingPlans200ApplicationJson listCallingPlans200ApplicationJSONObject) {
        this.listCallingPlans200ApplicationJSONObject = listCallingPlans200ApplicationJSONObject;
        return this;
    }
}