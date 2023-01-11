package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWordListByPermalinkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=permalink")
    public String permalink;
    public GetWordListByPermalinkPathParams withPermalink(String permalink) {
        this.permalink = permalink;
        return this;
    }
}