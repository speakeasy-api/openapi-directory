package openapisdk.models.operations;



public class UserApiGetNamesResponse {
    public byte[] body;
    public UserApiGetNamesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserApiGetNamesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UserApiGetNamesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] userApiGetNames200ApplicationJSONStrings;
    public UserApiGetNamesResponse withUserApiGetNames200ApplicationJsonStrings(String[] userApiGetNames200ApplicationJSONStrings) {
        this.userApiGetNames200ApplicationJSONStrings = userApiGetNames200ApplicationJSONStrings;
        return this;
    }
    public String[] userApiGetNames200ApplicationJsonpStrings;
    public UserApiGetNamesResponse withUserApiGetNames200ApplicationJsonpStrings(String[] userApiGetNames200ApplicationJsonpStrings) {
        this.userApiGetNames200ApplicationJsonpStrings = userApiGetNames200ApplicationJsonpStrings;
        return this;
    }
    public String[] userApiGetNames200TextJSONStrings;
    public UserApiGetNamesResponse withUserApiGetNames200TextJsonStrings(String[] userApiGetNames200TextJSONStrings) {
        this.userApiGetNames200TextJSONStrings = userApiGetNames200TextJSONStrings;
        return this;
    }
}