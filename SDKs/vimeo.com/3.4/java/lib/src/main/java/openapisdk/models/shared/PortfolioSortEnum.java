package openapisdk.models.shared;


public enum PortfolioSortEnum {
    ALPHABETICAL("alphabetical"),
    CLIPS("clips"),
    MODIFIED("modified"),
    RECENT("recent");

    public final String value;

    private PortfolioSortEnum(String value) {
        this.value = value;
    }
}
