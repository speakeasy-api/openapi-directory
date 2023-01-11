package openapisdk.models.operations;



public class TagApiGetNamesResponse {
    public byte[] body;
    public TagApiGetNamesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public TagApiGetNamesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TagApiGetNamesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] tagApiGetNames200ApplicationJSONStrings;
    public TagApiGetNamesResponse withTagApiGetNames200ApplicationJsonStrings(String[] tagApiGetNames200ApplicationJSONStrings) {
        this.tagApiGetNames200ApplicationJSONStrings = tagApiGetNames200ApplicationJSONStrings;
        return this;
    }
    public String[] tagApiGetNames200ApplicationJsonpStrings;
    public TagApiGetNamesResponse withTagApiGetNames200ApplicationJsonpStrings(String[] tagApiGetNames200ApplicationJsonpStrings) {
        this.tagApiGetNames200ApplicationJsonpStrings = tagApiGetNames200ApplicationJsonpStrings;
        return this;
    }
    public String[] tagApiGetNames200TextJSONStrings;
    public TagApiGetNamesResponse withTagApiGetNames200TextJsonStrings(String[] tagApiGetNames200TextJSONStrings) {
        this.tagApiGetNames200TextJSONStrings = tagApiGetNames200TextJSONStrings;
        return this;
    }
}