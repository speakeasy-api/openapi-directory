package openapisdk.models.operations;



public class DeleteVoicemailResponse {
    public byte[] body;
    public DeleteVoicemailResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeleteVoicemailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteVoicemailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object deleteVoicemail204ApplicationJSONAny;
    public DeleteVoicemailResponse withDeleteVoicemail204ApplicationJsonAny(Object deleteVoicemail204ApplicationJSONAny) {
        this.deleteVoicemail204ApplicationJSONAny = deleteVoicemail204ApplicationJSONAny;
        return this;
    }
}