package openapisdk.models.shared;


public enum EmploymentBasisEnum {
    FULLTIME("FULLTIME"),
    PARTTIME("PARTTIME"),
    CASUAL("CASUAL"),
    LABOURHIRE("LABOURHIRE"),
    SUPERINCOMESTREAM("SUPERINCOMESTREAM");

    public final String value;

    private EmploymentBasisEnum(String value) {
        this.value = value;
    }
}
