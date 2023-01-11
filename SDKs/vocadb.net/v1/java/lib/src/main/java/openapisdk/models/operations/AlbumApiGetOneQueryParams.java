package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AlbumApiGetOneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public AlbumApiGetOneFieldsEnum fields;
    public AlbumApiGetOneQueryParams withFields(AlbumApiGetOneFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lang")
    public AlbumApiGetOneLangEnum lang;
    public AlbumApiGetOneQueryParams withLang(AlbumApiGetOneLangEnum lang) {
        this.lang = lang;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=songFields")
    public AlbumApiGetOneSongFieldsEnum songFields;
    public AlbumApiGetOneQueryParams withSongFields(AlbumApiGetOneSongFieldsEnum songFields) {
        this.songFields = songFields;
        return this;
    }
}