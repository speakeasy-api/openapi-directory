package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateZrLocationProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=locationId")
    public String locationId;
    public UpdateZrLocationProfilePathParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
}