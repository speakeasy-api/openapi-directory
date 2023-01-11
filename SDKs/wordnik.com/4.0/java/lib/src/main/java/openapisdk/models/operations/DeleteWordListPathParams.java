package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWordListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=permalink")
    public String permalink;
    public DeleteWordListPathParams withPermalink(String permalink) {
        this.permalink = permalink;
        return this;
    }
}