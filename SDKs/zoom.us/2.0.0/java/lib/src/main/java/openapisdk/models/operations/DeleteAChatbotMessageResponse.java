package openapisdk.models.operations;



public class DeleteAChatbotMessageResponse {
    public byte[] body;
    public DeleteAChatbotMessageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeleteAChatbotMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteAChatbotMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteAChatbotMessage200ApplicationJson deleteAChatbotMessage200ApplicationJSONObject;
    public DeleteAChatbotMessageResponse withDeleteAChatbotMessage200ApplicationJsonObject(DeleteAChatbotMessage200ApplicationJson deleteAChatbotMessage200ApplicationJSONObject) {
        this.deleteAChatbotMessage200ApplicationJSONObject = deleteAChatbotMessage200ApplicationJSONObject;
        return this;
    }
}