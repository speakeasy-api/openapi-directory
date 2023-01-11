package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UploadVBuserRequestBody {
    @SpeakeasyMetadata("multipartForm:name=file")
    public String file;
    public UploadVBuserRequestBody withFile(String file) {
        this.file = file;
        return this;
    }
}