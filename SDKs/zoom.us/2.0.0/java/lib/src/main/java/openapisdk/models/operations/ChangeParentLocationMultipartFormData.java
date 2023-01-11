package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeParentLocationMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=parent_location_id")
    public String parentLocationId;
    public ChangeParentLocationMultipartFormData withParentLocationId(String parentLocationId) {
        this.parentLocationId = parentLocationId;
        return this;
    }
}