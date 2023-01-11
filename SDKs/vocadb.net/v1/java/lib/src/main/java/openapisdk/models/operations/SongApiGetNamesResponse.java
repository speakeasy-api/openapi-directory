package openapisdk.models.operations;



public class SongApiGetNamesResponse {
    public byte[] body;
    public SongApiGetNamesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SongApiGetNamesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String[] songApiGetNames200ApplicationJSONStrings;
    public SongApiGetNamesResponse withSongApiGetNames200ApplicationJsonStrings(String[] songApiGetNames200ApplicationJSONStrings) {
        this.songApiGetNames200ApplicationJSONStrings = songApiGetNames200ApplicationJSONStrings;
        return this;
    }
    public String[] songApiGetNames200ApplicationJsonpStrings;
    public SongApiGetNamesResponse withSongApiGetNames200ApplicationJsonpStrings(String[] songApiGetNames200ApplicationJsonpStrings) {
        this.songApiGetNames200ApplicationJsonpStrings = songApiGetNames200ApplicationJsonpStrings;
        return this;
    }
    public String[] songApiGetNames200TextJSONStrings;
    public SongApiGetNamesResponse withSongApiGetNames200TextJsonStrings(String[] songApiGetNames200TextJSONStrings) {
        this.songApiGetNames200TextJSONStrings = songApiGetNames200TextJSONStrings;
        return this;
    }
    public Long statusCode;
    public SongApiGetNamesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}