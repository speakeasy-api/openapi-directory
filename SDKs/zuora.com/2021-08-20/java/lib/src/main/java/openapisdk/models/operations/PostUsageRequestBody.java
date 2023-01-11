package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUsageRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PostUsageRequestBodyFile file;
    public PostUsageRequestBody withFile(PostUsageRequestBodyFile file) {
        this.file = file;
        return this;
    }
}