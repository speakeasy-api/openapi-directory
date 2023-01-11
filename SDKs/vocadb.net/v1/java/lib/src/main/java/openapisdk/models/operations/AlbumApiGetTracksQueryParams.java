package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlbumApiGetTracksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public AlbumApiGetTracksFieldsEnum fields;
    public AlbumApiGetTracksQueryParams withFields(AlbumApiGetTracksFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public AlbumApiGetTracksLangEnum lang;
    public AlbumApiGetTracksQueryParams withLang(AlbumApiGetTracksLangEnum lang) {
        this.lang = lang;
        return this;
    }
}