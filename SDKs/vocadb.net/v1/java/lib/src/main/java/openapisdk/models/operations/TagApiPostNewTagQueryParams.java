package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagApiPostNewTagQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public TagApiPostNewTagQueryParams withName(String name) {
        this.name = name;
        return this;
    }
}