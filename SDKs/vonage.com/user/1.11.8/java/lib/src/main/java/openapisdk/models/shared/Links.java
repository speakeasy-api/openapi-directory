package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Links {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("first")
    public FirstHref first;
    public Links withFirst(FirstHref first) {
        this.first = first;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public NextHref next;
    public Links withNext(NextHref next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prev")
    public PrevHref prev;
    public Links withPrev(PrevHref prev) {
        this.prev = prev;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public SelfHref self;
    public Links withSelf(SelfHref self) {
        this.self = self;
        return this;
    }
}