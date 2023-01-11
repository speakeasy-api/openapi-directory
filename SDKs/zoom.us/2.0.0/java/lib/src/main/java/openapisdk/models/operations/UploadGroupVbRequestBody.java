package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadGroupVbRequestBody {
    @SpeakeasyMetadata("multipartForm:name=file")
    public String file;
    public UploadGroupVbRequestBody withFile(String file) {
        this.file = file;
        return this;
    }
}