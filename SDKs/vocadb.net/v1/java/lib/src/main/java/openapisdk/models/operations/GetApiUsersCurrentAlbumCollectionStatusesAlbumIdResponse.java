package openapisdk.models.operations;



public class GetApiUsersCurrentAlbumCollectionStatusesAlbumIdResponse {
    public openapisdk.models.shared.AlbumForUserForApiContract albumForUserForApiContract;
    public GetApiUsersCurrentAlbumCollectionStatusesAlbumIdResponse withAlbumForUserForApiContract(openapisdk.models.shared.AlbumForUserForApiContract albumForUserForApiContract) {
        this.albumForUserForApiContract = albumForUserForApiContract;
        return this;
    }
    public byte[] body;
    public GetApiUsersCurrentAlbumCollectionStatusesAlbumIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetApiUsersCurrentAlbumCollectionStatusesAlbumIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetApiUsersCurrentAlbumCollectionStatusesAlbumIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}