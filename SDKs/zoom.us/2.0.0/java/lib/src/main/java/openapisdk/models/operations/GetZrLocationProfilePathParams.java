package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetZrLocationProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=locationId")
    public String locationId;
    public GetZrLocationProfilePathParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
}