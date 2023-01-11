package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateChannelMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public UpdateChannelMultipartFormData withName(String name) {
        this.name = name;
        return this;
    }
}