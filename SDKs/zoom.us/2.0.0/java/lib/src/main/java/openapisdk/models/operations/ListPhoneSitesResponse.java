package openapisdk.models.operations;



public class ListPhoneSitesResponse {
    public byte[] body;
    public ListPhoneSitesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListPhoneSitesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListPhoneSitesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListPhoneSites200ApplicationJson listPhoneSites200ApplicationJSONObject;
    public ListPhoneSitesResponse withListPhoneSites200ApplicationJsonObject(ListPhoneSites200ApplicationJson listPhoneSites200ApplicationJSONObject) {
        this.listPhoneSites200ApplicationJSONObject = listPhoneSites200ApplicationJSONObject;
        return this;
    }
}