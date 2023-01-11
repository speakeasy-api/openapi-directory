package openapisdk.models.operations;



public class AddSettingTemplateResponse {
    public byte[] body;
    public AddSettingTemplateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AddSettingTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddSettingTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddSettingTemplate201ApplicationJson addSettingTemplate201ApplicationJSONObject;
    public AddSettingTemplateResponse withAddSettingTemplate201ApplicationJsonObject(AddSettingTemplate201ApplicationJson addSettingTemplate201ApplicationJSONObject) {
        this.addSettingTemplate201ApplicationJSONObject = addSettingTemplate201ApplicationJSONObject;
        return this;
    }
}