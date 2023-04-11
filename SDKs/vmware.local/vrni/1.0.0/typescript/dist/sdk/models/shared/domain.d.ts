import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DomainDomainTypeEnum {
    Ldap = "LDAP",
    Local = "LOCAL"
}
export declare class Domain extends SpeakeasyBase {
    domainType?: DomainDomainTypeEnum;
    /**
     * domain value, not required for LOCAL domain
     */
    value?: string;
}
