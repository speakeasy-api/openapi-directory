package openapisdk.models.operations;



public class GetSettingTemplateResponse {
    public byte[] body;
    public GetSettingTemplateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSettingTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSettingTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSettingTemplate200ApplicationJson getSettingTemplate200ApplicationJSONObject;
    public GetSettingTemplateResponse withGetSettingTemplate200ApplicationJsonObject(GetSettingTemplate200ApplicationJson getSettingTemplate200ApplicationJSONObject) {
        this.getSettingTemplate200ApplicationJSONObject = getSettingTemplate200ApplicationJSONObject;
        return this;
    }
    public Object getSettingTemplate404ApplicationJSONAny;
    public GetSettingTemplateResponse withGetSettingTemplate404ApplicationJsonAny(Object getSettingTemplate404ApplicationJSONAny) {
        this.getSettingTemplate404ApplicationJSONAny = getSettingTemplate404ApplicationJSONAny;
        return this;
    }
}