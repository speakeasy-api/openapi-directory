package openapisdk.models.operations;



public class ReleaseEventApiGetNamesResponse {
    public byte[] body;
    public ReleaseEventApiGetNamesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReleaseEventApiGetNamesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String[] releaseEventApiGetNames200ApplicationJSONStrings;
    public ReleaseEventApiGetNamesResponse withReleaseEventApiGetNames200ApplicationJsonStrings(String[] releaseEventApiGetNames200ApplicationJSONStrings) {
        this.releaseEventApiGetNames200ApplicationJSONStrings = releaseEventApiGetNames200ApplicationJSONStrings;
        return this;
    }
    public String[] releaseEventApiGetNames200ApplicationJsonpStrings;
    public ReleaseEventApiGetNamesResponse withReleaseEventApiGetNames200ApplicationJsonpStrings(String[] releaseEventApiGetNames200ApplicationJsonpStrings) {
        this.releaseEventApiGetNames200ApplicationJsonpStrings = releaseEventApiGetNames200ApplicationJsonpStrings;
        return this;
    }
    public String[] releaseEventApiGetNames200TextJSONStrings;
    public ReleaseEventApiGetNamesResponse withReleaseEventApiGetNames200TextJsonStrings(String[] releaseEventApiGetNames200TextJSONStrings) {
        this.releaseEventApiGetNames200TextJSONStrings = releaseEventApiGetNames200TextJSONStrings;
        return this;
    }
    public Long statusCode;
    public ReleaseEventApiGetNamesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}