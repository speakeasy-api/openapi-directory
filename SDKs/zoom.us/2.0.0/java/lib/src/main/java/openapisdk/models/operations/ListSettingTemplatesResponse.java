package openapisdk.models.operations;



public class ListSettingTemplatesResponse {
    public byte[] body;
    public ListSettingTemplatesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListSettingTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListSettingTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListSettingTemplates200ApplicationJson listSettingTemplates200ApplicationJSONObject;
    public ListSettingTemplatesResponse withListSettingTemplates200ApplicationJsonObject(ListSettingTemplates200ApplicationJson listSettingTemplates200ApplicationJSONObject) {
        this.listSettingTemplates200ApplicationJSONObject = listSettingTemplates200ApplicationJSONObject;
        return this;
    }
}