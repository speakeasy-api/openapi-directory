package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class RecordingsListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public LocalDate from;
    public RecordingsListQueryParams withFrom(LocalDate from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mc")
    public String mc;
    public RecordingsListQueryParams withMc(String mc) {
        this.mc = mc;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=next_page_token")
    public String nextPageToken;
    public RecordingsListQueryParams withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public RecordingsListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public LocalDate to;
    public RecordingsListQueryParams withTo(LocalDate to) {
        this.to = to;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=trash")
    public Boolean trash;
    public RecordingsListQueryParams withTrash(Boolean trash) {
        this.trash = trash;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=trash_type")
    public String trashType;
    public RecordingsListQueryParams withTrashType(String trashType) {
        this.trashType = trashType;
        return this;
    }
}