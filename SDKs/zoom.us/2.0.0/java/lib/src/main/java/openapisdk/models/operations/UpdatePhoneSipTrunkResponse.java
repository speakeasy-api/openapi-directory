package openapisdk.models.operations;



public class UpdatePhoneSipTrunkResponse {
    public byte[] body;
    public UpdatePhoneSipTrunkResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdatePhoneSipTrunkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdatePhoneSipTrunkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updatePhoneSIPTrunk204ApplicationJSONAny;
    public UpdatePhoneSipTrunkResponse withUpdatePhoneSipTrunk204ApplicationJsonAny(Object updatePhoneSIPTrunk204ApplicationJSONAny) {
        this.updatePhoneSIPTrunk204ApplicationJSONAny = updatePhoneSIPTrunk204ApplicationJSONAny;
        return this;
    }
}