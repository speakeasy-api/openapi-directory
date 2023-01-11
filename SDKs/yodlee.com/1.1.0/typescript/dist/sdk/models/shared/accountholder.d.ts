import { SpeakeasyBase } from "../../../internal/utils";
import { Identifier } from "./identifier";
import { Name } from "./name";
export declare enum AccountHolderOwnershipEnum {
    Primary = "PRIMARY",
    Secondary = "SECONDARY",
    Custodian = "CUSTODIAN",
    Others = "OTHERS",
    PowerOfAttorney = "POWER_OF_ATTORNEY",
    Trustee = "TRUSTEE",
    JointOwner = "JOINT_OWNER",
    Beneficiary = "BENEFICIARY",
    Aas = "AAS",
    Business = "BUSINESS",
    Dba = "DBA",
    Trust = "TRUST"
}
export declare class AccountHolder extends SpeakeasyBase {
    gender?: string;
    identifier?: Identifier[];
    name?: Name;
    ownership?: AccountHolderOwnershipEnum;
}
