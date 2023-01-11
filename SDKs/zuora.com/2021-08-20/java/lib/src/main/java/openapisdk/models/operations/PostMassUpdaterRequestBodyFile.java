package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMassUpdaterRequestBodyFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PostMassUpdaterRequestBodyFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=file")
    public String file;
    public PostMassUpdaterRequestBodyFile withFile(String file) {
        this.file = file;
        return this;
    }
}