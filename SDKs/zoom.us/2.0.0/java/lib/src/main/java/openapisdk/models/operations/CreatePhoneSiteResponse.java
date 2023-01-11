package openapisdk.models.operations;



public class CreatePhoneSiteResponse {
    public byte[] body;
    public CreatePhoneSiteResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CreatePhoneSiteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreatePhoneSiteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreatePhoneSite204ApplicationJson createPhoneSite204ApplicationJSONObject;
    public CreatePhoneSiteResponse withCreatePhoneSite204ApplicationJsonObject(CreatePhoneSite204ApplicationJson createPhoneSite204ApplicationJSONObject) {
        this.createPhoneSite204ApplicationJSONObject = createPhoneSite204ApplicationJSONObject;
        return this;
    }
}