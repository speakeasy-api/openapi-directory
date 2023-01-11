package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeParentLocationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=locationId")
    public String locationId;
    public ChangeParentLocationPathParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
}