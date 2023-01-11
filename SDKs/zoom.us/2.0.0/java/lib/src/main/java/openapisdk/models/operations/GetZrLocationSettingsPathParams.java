package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetZrLocationSettingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=locationId")
    public String locationId;
    public GetZrLocationSettingsPathParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
}