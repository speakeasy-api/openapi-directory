package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadVbRequestBody {
    @SpeakeasyMetadata("multipartForm:name=file")
    public String file;
    public UploadVbRequestBody withFile(String file) {
        this.file = file;
        return this;
    }
}