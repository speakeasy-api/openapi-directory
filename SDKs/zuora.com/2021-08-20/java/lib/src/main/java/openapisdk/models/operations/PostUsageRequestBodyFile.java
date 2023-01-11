package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsageRequestBodyFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public PostUsageRequestBodyFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=file")
    public String file;
    public PostUsageRequestBodyFile withFile(String file) {
        this.file = file;
        return this;
    }
}