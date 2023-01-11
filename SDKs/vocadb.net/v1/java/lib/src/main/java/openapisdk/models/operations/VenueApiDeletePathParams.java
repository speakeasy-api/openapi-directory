package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VenueApiDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public VenueApiDeletePathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}