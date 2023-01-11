package openapisdk.models.operations;



public class ListArchivedFilesResponse {
    public byte[] body;
    public ListArchivedFilesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListArchivedFilesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListArchivedFilesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListArchivedFiles200ApplicationJson listArchivedFiles200ApplicationJSONObject;
    public ListArchivedFilesResponse withListArchivedFiles200ApplicationJsonObject(ListArchivedFiles200ApplicationJson listArchivedFiles200ApplicationJSONObject) {
        this.listArchivedFiles200ApplicationJSONObject = listArchivedFiles200ApplicationJSONObject;
        return this;
    }
}