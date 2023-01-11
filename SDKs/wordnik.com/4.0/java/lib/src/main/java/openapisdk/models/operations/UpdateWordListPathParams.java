package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWordListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=permalink")
    public String permalink;
    public UpdateWordListPathParams withPermalink(String permalink) {
        this.permalink = permalink;
        return this;
    }
}