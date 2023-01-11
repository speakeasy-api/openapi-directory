package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateUserLevelChannelMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public UpdateUserLevelChannelMultipartFormData withName(String name) {
        this.name = name;
        return this;
    }
}