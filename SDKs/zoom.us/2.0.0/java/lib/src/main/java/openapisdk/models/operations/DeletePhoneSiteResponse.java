package openapisdk.models.operations;



public class DeletePhoneSiteResponse {
    public byte[] body;
    public DeletePhoneSiteResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeletePhoneSiteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeletePhoneSiteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object deletePhoneSite204ApplicationJSONAny;
    public DeletePhoneSiteResponse withDeletePhoneSite204ApplicationJsonAny(Object deletePhoneSite204ApplicationJSONAny) {
        this.deletePhoneSite204ApplicationJSONAny = deletePhoneSite204ApplicationJSONAny;
        return this;
    }
}