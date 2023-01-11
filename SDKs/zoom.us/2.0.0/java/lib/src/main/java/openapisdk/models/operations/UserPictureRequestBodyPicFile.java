package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserPictureRequestBodyPicFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public UserPictureRequestBodyPicFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=pic_file")
    public String picFile;
    public UserPictureRequestBodyPicFile withPicFile(String picFile) {
        this.picFile = picFile;
        return this;
    }
}