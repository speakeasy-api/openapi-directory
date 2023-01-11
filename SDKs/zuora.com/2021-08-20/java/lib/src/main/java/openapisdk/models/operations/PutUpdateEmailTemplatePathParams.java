package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUpdateEmailTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutUpdateEmailTemplatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}