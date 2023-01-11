package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMassUpdaterRequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public PostMassUpdaterRequestBodyFile file;
    public PostMassUpdaterRequestBody withFile(PostMassUpdaterRequestBodyFile file) {
        this.file = file;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=params")
    public String params;
    public PostMassUpdaterRequestBody withParams(String params) {
        this.params = params;
        return this;
    }
}