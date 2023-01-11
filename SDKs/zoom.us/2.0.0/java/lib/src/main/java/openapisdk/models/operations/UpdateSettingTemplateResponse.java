package openapisdk.models.operations;



public class UpdateSettingTemplateResponse {
    public byte[] body;
    public UpdateSettingTemplateResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdateSettingTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSettingTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateSettingTemplate204ApplicationJSONAny;
    public UpdateSettingTemplateResponse withUpdateSettingTemplate204ApplicationJsonAny(Object updateSettingTemplate204ApplicationJSONAny) {
        this.updateSettingTemplate204ApplicationJSONAny = updateSettingTemplate204ApplicationJSONAny;
        return this;
    }
}