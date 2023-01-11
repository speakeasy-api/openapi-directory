package openapisdk.models.operations;



public class UpdateSiteDetailsResponse {
    public byte[] body;
    public UpdateSiteDetailsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdateSiteDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateSiteDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateSiteDetails204ApplicationJSONAny;
    public UpdateSiteDetailsResponse withUpdateSiteDetails204ApplicationJsonAny(Object updateSiteDetails204ApplicationJSONAny) {
        this.updateSiteDetails204ApplicationJSONAny = updateSiteDetails204ApplicationJSONAny;
        return this;
    }
}