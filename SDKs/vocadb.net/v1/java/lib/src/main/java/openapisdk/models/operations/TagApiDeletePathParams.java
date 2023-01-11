package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagApiDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public TagApiDeletePathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}