package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CheckInRoomsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public CheckInRoomsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}