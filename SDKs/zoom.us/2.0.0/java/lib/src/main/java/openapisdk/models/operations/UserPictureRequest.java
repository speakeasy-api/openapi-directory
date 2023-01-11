package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserPictureRequest {
    public UserPicturePathParams pathParams;
    public UserPictureRequest withPathParams(UserPicturePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public UserPictureRequestBody request;
    public UserPictureRequest withRequest(UserPictureRequestBody request) {
        this.request = request;
        return this;
    }
}