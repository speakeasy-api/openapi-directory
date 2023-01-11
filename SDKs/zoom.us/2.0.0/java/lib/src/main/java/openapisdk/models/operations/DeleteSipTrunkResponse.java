package openapisdk.models.operations;



public class DeleteSipTrunkResponse {
    public byte[] body;
    public DeleteSipTrunkResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeleteSipTrunkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteSipTrunkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> deleteSIPTrunk204ApplicationJSONObject;
    public DeleteSipTrunkResponse withDeleteSipTrunk204ApplicationJsonObject(java.util.Map<String, Object> deleteSIPTrunk204ApplicationJSONObject) {
        this.deleteSIPTrunk204ApplicationJSONObject = deleteSIPTrunk204ApplicationJSONObject;
        return this;
    }
}