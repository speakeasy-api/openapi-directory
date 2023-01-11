package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReleaseEventApiGetPublishedSongsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public ReleaseEventApiGetPublishedSongsFieldsEnum fields;
    public ReleaseEventApiGetPublishedSongsQueryParams withFields(ReleaseEventApiGetPublishedSongsFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public ReleaseEventApiGetPublishedSongsLangEnum lang;
    public ReleaseEventApiGetPublishedSongsQueryParams withLang(ReleaseEventApiGetPublishedSongsLangEnum lang) {
        this.lang = lang;
        return this;
    }
}