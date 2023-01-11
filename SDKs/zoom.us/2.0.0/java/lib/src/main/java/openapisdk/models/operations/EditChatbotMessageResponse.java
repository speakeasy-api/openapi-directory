package openapisdk.models.operations;



public class EditChatbotMessageResponse {
    public byte[] body;
    public EditChatbotMessageResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public EditChatbotMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public EditChatbotMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public EditChatbotMessage200ApplicationJson editChatbotMessage200ApplicationJSONObject;
    public EditChatbotMessageResponse withEditChatbotMessage200ApplicationJsonObject(EditChatbotMessage200ApplicationJson editChatbotMessage200ApplicationJSONObject) {
        this.editChatbotMessage200ApplicationJSONObject = editChatbotMessage200ApplicationJSONObject;
        return this;
    }
}