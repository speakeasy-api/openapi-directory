package openapisdk.models.operations;



public class EntryApiGetNamesResponse {
    public byte[] body;
    public EntryApiGetNamesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public EntryApiGetNamesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String[] entryApiGetNames200ApplicationJSONStrings;
    public EntryApiGetNamesResponse withEntryApiGetNames200ApplicationJsonStrings(String[] entryApiGetNames200ApplicationJSONStrings) {
        this.entryApiGetNames200ApplicationJSONStrings = entryApiGetNames200ApplicationJSONStrings;
        return this;
    }
    public String[] entryApiGetNames200ApplicationJsonpStrings;
    public EntryApiGetNamesResponse withEntryApiGetNames200ApplicationJsonpStrings(String[] entryApiGetNames200ApplicationJsonpStrings) {
        this.entryApiGetNames200ApplicationJsonpStrings = entryApiGetNames200ApplicationJsonpStrings;
        return this;
    }
    public String[] entryApiGetNames200TextJSONStrings;
    public EntryApiGetNamesResponse withEntryApiGetNames200TextJsonStrings(String[] entryApiGetNames200TextJSONStrings) {
        this.entryApiGetNames200TextJSONStrings = entryApiGetNames200TextJSONStrings;
        return this;
    }
    public Long statusCode;
    public EntryApiGetNamesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}