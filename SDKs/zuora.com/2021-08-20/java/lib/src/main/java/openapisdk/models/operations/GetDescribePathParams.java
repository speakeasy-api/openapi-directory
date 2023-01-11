package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=object")
    public String object;
    public GetDescribePathParams withObject(String object) {
        this.object = object;
        return this;
    }
}