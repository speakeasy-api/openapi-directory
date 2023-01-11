package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateZrLocationSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=locationId")
    public String locationId;
    public UpdateZrLocationSettingsPathParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
}