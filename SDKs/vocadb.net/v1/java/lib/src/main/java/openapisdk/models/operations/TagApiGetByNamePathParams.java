package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagApiGetByNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public TagApiGetByNamePathParams withName(String name) {
        this.name = name;
        return this;
    }
}