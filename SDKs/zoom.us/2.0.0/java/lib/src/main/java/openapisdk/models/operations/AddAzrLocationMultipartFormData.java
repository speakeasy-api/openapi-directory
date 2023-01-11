package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddAzrLocationMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=name")
    public String name;
    public AddAzrLocationMultipartFormData withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=parent_location_id")
    public String parentLocationId;
    public AddAzrLocationMultipartFormData withParentLocationId(String parentLocationId) {
        this.parentLocationId = parentLocationId;
        return this;
    }
}