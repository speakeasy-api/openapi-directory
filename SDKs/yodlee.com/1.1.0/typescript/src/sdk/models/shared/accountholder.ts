import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Identifier } from "./identifier";
import { Name } from "./name";


export enum AccountHolderOwnershipEnum {
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


export class AccountHolder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: string;

  @SpeakeasyMetadata({ data: "json, name=identifier", elemType: Identifier })
  identifier?: Identifier[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: Name;

  @SpeakeasyMetadata({ data: "json, name=ownership" })
  ownership?: AccountHolderOwnershipEnum;
}
