package openapisdk.models.operations;



public class PostPhoneSipTrunkResponse {
    public byte[] body;
    public PostPhoneSipTrunkResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostPhoneSipTrunkResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostPhoneSipTrunkResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostPhoneSipTrunk201ApplicationJson postPhoneSIPTrunk201ApplicationJSONObject;
    public PostPhoneSipTrunkResponse withPostPhoneSipTrunk201ApplicationJsonObject(PostPhoneSipTrunk201ApplicationJson postPhoneSIPTrunk201ApplicationJSONObject) {
        this.postPhoneSIPTrunk201ApplicationJSONObject = postPhoneSIPTrunk201ApplicationJSONObject;
        return this;
    }
}