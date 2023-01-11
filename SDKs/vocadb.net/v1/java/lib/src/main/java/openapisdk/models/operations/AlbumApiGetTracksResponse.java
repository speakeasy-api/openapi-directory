package openapisdk.models.operations;



public class AlbumApiGetTracksResponse {
    public byte[] body;
    public AlbumApiGetTracksResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AlbumApiGetTracksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SongInAlbumForApiContract[] songInAlbumForApiContracts;
    public AlbumApiGetTracksResponse withSongInAlbumForApiContracts(openapisdk.models.shared.SongInAlbumForApiContract[] songInAlbumForApiContracts) {
        this.songInAlbumForApiContracts = songInAlbumForApiContracts;
        return this;
    }
    public Long statusCode;
    public AlbumApiGetTracksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}