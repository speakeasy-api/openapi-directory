import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SuperMembership extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EmployeeNumber" })
  employeeNumber: string;

  @SpeakeasyMetadata({ data: "json, name=SuperFundID" })
  superFundID: string;

  @SpeakeasyMetadata({ data: "json, name=SuperMembershipID" })
  superMembershipID?: string;
}
