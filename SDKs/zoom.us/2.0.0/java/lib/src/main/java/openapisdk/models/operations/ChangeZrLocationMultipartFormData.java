package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeZrLocationMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=location_id")
    public String locationId;
    public ChangeZrLocationMultipartFormData withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
}