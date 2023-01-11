package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserPictureRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public UserPictureRequestBodyPicFile picFile;
    public UserPictureRequestBody withPicFile(UserPictureRequestBodyPicFile picFile) {
        this.picFile = picFile;
        return this;
    }
}