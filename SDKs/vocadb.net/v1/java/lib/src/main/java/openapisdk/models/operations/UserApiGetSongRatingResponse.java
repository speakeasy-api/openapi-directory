package openapisdk.models.operations;



public class UserApiGetSongRatingResponse {
    public byte[] body;
    public UserApiGetSongRatingResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserApiGetSongRatingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UserApiGetSongRatingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UserApiGetSongRating200ApplicationJsonEnum userApiGetSongRating200ApplicationJSONStringEnum;
    public UserApiGetSongRatingResponse withUserApiGetSongRating200ApplicationJsonStringEnum(UserApiGetSongRating200ApplicationJsonEnum userApiGetSongRating200ApplicationJSONStringEnum) {
        this.userApiGetSongRating200ApplicationJSONStringEnum = userApiGetSongRating200ApplicationJSONStringEnum;
        return this;
    }
    public UserApiGetSongRating200ApplicationJsonpEnum userApiGetSongRating200ApplicationJsonpStringEnum;
    public UserApiGetSongRatingResponse withUserApiGetSongRating200ApplicationJsonpStringEnum(UserApiGetSongRating200ApplicationJsonpEnum userApiGetSongRating200ApplicationJsonpStringEnum) {
        this.userApiGetSongRating200ApplicationJsonpStringEnum = userApiGetSongRating200ApplicationJsonpStringEnum;
        return this;
    }
    public UserApiGetSongRating200TextJsonEnum userApiGetSongRating200TextJSONStringEnum;
    public UserApiGetSongRatingResponse withUserApiGetSongRating200TextJsonStringEnum(UserApiGetSongRating200TextJsonEnum userApiGetSongRating200TextJSONStringEnum) {
        this.userApiGetSongRating200TextJSONStringEnum = userApiGetSongRating200TextJSONStringEnum;
        return this;
    }
}