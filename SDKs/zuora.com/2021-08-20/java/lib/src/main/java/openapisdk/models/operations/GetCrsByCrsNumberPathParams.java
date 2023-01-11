package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCrsByCrsNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=crs-number")
    public String crsNumber;
    public GetCrsByCrsNumberPathParams withCrsNumber(String crsNumber) {
        this.crsNumber = crsNumber;
        return this;
    }
}